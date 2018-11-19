import BaseController from '../../framework/base-controller';
import ExponentialBackoffPolicy from 'ember-concurrency-retryable/policies/exponential-backoff';

import { observer } from '@ember/object';
import { on } from '@ember/object/evented';
import { task } from 'ember-concurrency';

const backoffPolicy = new ExponentialBackoffPolicy({
	'multiplier': 1.5,
	'minDelay': 30,
	'maxDelay': 400
});

export default BaseController.extend({
	'editable': false,

	init() {
		this._super(...arguments);

		this.set('permissions', ['user-manager-read']);
		this.get('currentUser').on('userDataUpdated', this, 'onUserDataUpdated');
	},

	destroy() {
		this.get('currentUser').off('userDataUpdated', this, 'onUserDataUpdated');
		this._super(...arguments);
	},

	'onPermissionChanges': on('init', observer('permissions', 'permissions.[]', 'permissions.@each', function() {
		this.onUserDataUpdated();
	})),

	onUserDataUpdated() {
		const updatePerm = this.get('currentUser').hasPermission('user-manager-update');
		this.set('editable', updatePerm);
	},

	'createUser': task(function* () {
		try {
			const self = this;
			const tenant = this.get('store').peekRecord('tenant-administration/tenant', window.twyrTenantId);

			const user = this.get('store').createRecord('tenant-administration/user-manager/user', {
				'firstName': 'New',
				'lastName': 'User',
				'email': `new.user@${tenant.get('subDomain')}.com`
			});

			const tenantUser = this.get('store').createRecord('tenant-administration/user-manager/tenant-user', {
				'tenant': tenant,
				'user': user
			});

			const modalData = {
				'title': 'Create User Account',

				'componentName': 'tenant-administration/user-manager/create-new-account',
				'componentState': {
					'tenantUser': tenantUser,
					'model': user
				},

				'confirmButton': {
					'text': 'Save',
					'icon': 'check',

					'primary': true,
					'raised': true,

					'callback': () => {
						self.get('doCreateAccount').perform(user, tenantUser);
					}
				},

				'cancelButton': {
					'text': 'Cancel',
					'icon': 'cancel',

					'warn': true,
					'raised': true,

					'callback': () => {
						tenantUser.deleteRecord();
						user.deleteRecord();
					}
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

	'doCreateAccount': task(function* (user, tenantUser) {
		yield user.save();
		yield tenantUser.save();
	}).drop().evented().retryable(backoffPolicy),

	'doCreateAccountSucceeded': on('doCreateAccount:succeeded', function(taskInstance) {
		const user = taskInstance.args[0];
		this.get('notification').display({
			'type': 'success',
			'message': `${user.get('firstName')} ${user.get('lastName')} <${user.get('email')}> succesfully created`
		});
	}),

	'doCreateAccountErrored': on('doCreateAccount:errored', function(taskInstance, err) {
		const user = taskInstance.args[0];
		const tenantUser = taskInstance.args[1];

		tenantUser.deleteRecord();
		user.deleteRecord();

		this.get('notification').display({
			'type': 'error',
			'error': err
		});
	})
});
