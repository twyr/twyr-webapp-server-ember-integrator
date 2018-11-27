import BaseComponent from '../../../framework/base-component';

import { A } from '@ember/array';
import ArrayProxy from '@ember/array/proxy';
import ExponentialBackoffPolicy from 'ember-concurrency-retryable/policies/exponential-backoff';

import { observer } from '@ember/object';
import { on } from '@ember/object/evented';
import { task } from 'ember-concurrency';

const backoffPolicy = new ExponentialBackoffPolicy({
	'multiplier': 1.5,
	'minDelay': 30,
	'maxDelay': 400
});

export default BaseComponent.extend({
	'editable': false,

	init() {
		this._super(...arguments);
		this.set('permissions', ['group-manager-read']);
	},

	'onHasPermissionChange': observer('hasPermission', function() {
		const updatePerm = this.get('currentUser').hasPermission('group-manager-update');
		this.set('editable', updatePerm);
	}),

	'addUser': task(function* () {
		try {
			const self = this;
			const tenantUsersToBeAdded = ArrayProxy.create({
				'content': A([])
			});

			const modalData = {
				'title': 'Add Users',

				'componentName': 'tenant-administration/group-manager/user-group-add-accounts',
				'componentState': {
					'group': this.get('selectedGroup'),
					'model': tenantUsersToBeAdded
				},

				'confirmButton': {
					'text': 'Add Users',
					'icon': 'check',

					'primary': true,
					'raised': true,

					'callback': () => {
						self.get('_doAddAccounts').perform(tenantUsersToBeAdded);
					}
				},

				'cancelButton': {
					'text': 'Cancel',
					'icon': 'cancel',

					'warn': true,
					'raised': true,
					'callback': null
				}
			};

			yield this.send('controller-action', 'displayModal', modalData);
		}
		catch(err) {
			this.get('notification').display({
				'type': 'error',
				'error': err
			});
		}
	}).drop(),

	'_doAddAccounts': task(function* (tenantUserList) {
		for(let idx = 0; idx < tenantUserList.get('length'); idx++) {
			const tenantUser = tenantUserList.objectAt(idx);
			let groupUser = this.get('store').peekAll('tenant-administration/group-manager/tenant-user-group').filterBy('tenantUser.id', tenantUser.get('id')).objectAt(0);

			if(groupUser && (groupUser.get('tenantGroup.id') === this.get('selectedGroup.id')) && !groupUser.get('isNew'))
				continue;

			let storedTenantUser = this.get('store').peekRecord('tenant-administration/user-manager/tenant-user', tenantUser.get('id'));
			if(!storedTenantUser) storedTenantUser = yield this.get('store').findRecord('tenant-administration/user-manager/tenant-user', tenantUser.get('id'));

			if(!groupUser)
				groupUser = this.get('store').createRecord('tenant-administration/group-manager/tenant-user-group', {
					'tenantUser': storedTenantUser,
					'tenantGroup': this.get('selectedGroup')
				});

			yield groupUser.save();
		}
	}).drop().evented().retryable(backoffPolicy),

	'_doAddAccountsSucceeded': on('_doAddAccounts:succeeded', function(taskInstance) {
		const tenantUserList = taskInstance.args[0];

		this.get('notification').display({
			'type': 'success',
			'message': `${tenantUserList.get('length')} Users succesfully added`
		});
	}),

	'_doAddAccountsErrored': on('_doAddAccounts:errored', function(taskInstance, err) {
		this.get('notification').display({
			'type': 'error',
			'error': err
		});
	}),

	'removeUser': task(function* (groupUser) {
		const user = yield groupUser.get('tenantUser.user');

		const modalData = {
			'title': 'Delete Group',
			'content': `Are you sure you want to delete the <strong>${user.get('firstName')} ${user.get('lastName')}</strong> from the <strong>${this.get('selectedGroup.displayName')}</strong> group?`,

			'confirmButton': {
				'text': 'Delete',
				'icon': 'delete',

				'warn': true,
				'raised': true,

				'callback': () => {
					this.get('_confirmedRemoveUser').perform(groupUser, user);
				}
			},

			'cancelButton': {
				'text': 'Cancel',
				'icon': 'close',

				'primary': true,
				'raised': true
			}
		};

		this.invokeAction('controller-action', 'displayModal', modalData);
	}).drop(),

	'_confirmedRemoveUser': task(function* (groupUser, user) { // eslint-disable-line no-unused-vars
		yield groupUser.destroyRecord();
	}).drop().evented().retryable(backoffPolicy),

	'_confirmedRemoveUserSucceeded': on('_confirmedRemoveUser:succeeded', function(taskInstance) {
		const user = taskInstance.args[1];

		this.get('notification').display({
			'type': 'success',
			'message': `<strong>${user.get('firstName')} ${user.get('lastName')}</strong> was removed succesfully from the <strong>${this.get('selectedGroup.displayName')}</strong> group`
		});
	}),

	'_confirmedRemoveUserErrored': on('_confirmedRemoveUser:errored', function(taskInstance, err) {
		const groupUser = taskInstance.args[0];
		groupUser.rollback();

		this.get('notification').display({
			'type': 'error',
			'error': err
		});
	})
});
