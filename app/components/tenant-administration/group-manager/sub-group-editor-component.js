import BaseComponent from '../../../framework/base-component';
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
	'observerInitialized': false,

	init() {
		this._super(...arguments);
		this.set('permissions', ['group-manager-read']);
	},

	'onHasPermissionChange': observer('hasPermission', function() {
		const updatePerm = this.get('currentUser').hasPermission('group-manager-update');
		this.set('editable', updatePerm);
	}),

	'_initializeObservers': task(function* () {
		const newGroup = this.get('store').createRecord('tenant-administration/group-manager/tenant-group', {
			'tenant': this.get('model'),
			'parent': this.get('selectedGroup')
		});

		const displayName = `New Group ${window.moment().valueOf()}`;
		newGroup.set('displayName', displayName);
		newGroup.set('description', displayName);

		const siblingGroups = yield this.get('selectedGroup.groups');
		const tenantGroups = yield this.get('model.groups');

		siblingGroups.addObject(newGroup);
		tenantGroups.addObject(newGroup);

		siblingGroups.removeObject(newGroup);
		tenantGroups.removeObject(newGroup);

		newGroup.deleteRecord();
	}).drop(),

	'changeDefaultForNewUser': task(function* (subGroup) {
		const loadedGroups = this.get('store').peekAll('tenant-administration/group-manager/tenant-group');
		let oldDefaultGroup = null;
		loadedGroups.forEach((tenantGroup) => {
			if(tenantGroup.get('id') === subGroup.get('id'))
				return;

			if(!tenantGroup.get('defaultForNewUser'))
				return;

				oldDefaultGroup = tenantGroup;
		});

		subGroup.set('defaultForNewUser', true);
		yield subGroup.save();

		if(oldDefaultGroup)
		yield oldDefaultGroup.reload({
			'include': 'tenant, parent, groups, tenantUserGroups, featurePermissions'
		});
	}).keepLatest().evented().retryable(backoffPolicy),

	'changeDefaultForNewUserSucceeded': on('changeDefaultForNewUser:succeeded', function (taskInstance) {
		this.get('notification').display({
			'type': 'success',
			'message': `Changes to ${taskInstance.args[0].get('displayName')} saved successfully`
		});
	}),

	'changeDefaultForNewUserErrored': on('changeDefaultForNewUser:errored', function (taskInstance, err) {
		taskInstance.args[0].rollback();
		taskInstance.args[0].reload({
			'include': 'tenant, parent, groups, tenantUserGroups, featurePermissions'
		});

		this.get('notification').display({
			'type': 'error',
			'error': err
		});
	}),

	'addGroup': task(function* () {
		if(!this.get('observerInitialized')) {
			yield this.get('_initializeObservers').perform();
			this.set('observerInitialized', true);
		}

		const newGroup = this.get('store').createRecord('tenant-administration/group-manager/tenant-group', {
			'tenant': this.get('model'),
			'parent': this.get('selectedGroup')
		});

		const displayName = `New Group ${window.moment().valueOf()}`;
		newGroup.set('displayName', displayName);
		newGroup.set('description', displayName);

		const siblingGroups = yield this.get('selectedGroup.groups');
		siblingGroups.addObject(newGroup);

		const tenantGroups = yield this.get('model.groups');
		tenantGroups.addObject(newGroup);
	}).drop(),

	'saveGroup': task(function* (subGroup) {
		yield subGroup.save();
	}).drop().evented().retryable(backoffPolicy),

	'saveGroupSucceeded': on('saveGroup:succeeded', function (taskInstance) {
		this.get('notification').display({
			'type': 'success',
			'message': `Changes to ${taskInstance.args[0].get('displayName')} saved successfully`
		});
	}),

	'saveGroupErrored': on('saveGroup:errored', function (taskInstance, err) {
		const subGroup = taskInstance.args[0];
		subGroup.rollback();

		if(!subGroup.get('isNew'))
		subGroup.reload({
			'include': 'tenant, parent, groups, tenantUserGroups, featurePermissions'
		});

		this.get('notification').display({
			'type': 'error',
			'error': err
		});
	}),

	'deleteGroup': task(function* (subGroup) {
		if(!this.get('observerInitialized')) {
			yield this.get('_initializeObservers').perform();
			this.set('observerInitialized', true);
		}

		const modalData = {
			'title': 'Delete Group',
			'content': `Are you sure you want to delete the <strong>${subGroup.get('displayName')}</strong> group?`,

			'confirmButton': {
				'text': 'Delete',
				'icon': 'delete',

				'warn': true,
				'raised': true,

				'callback': () => {
					this.get('_confirmedDeleteGroup').perform(subGroup);
				}
			},

			'cancelButton': {
				'text': 'Cancel',
				'icon': 'close',

				'primary': true,
				'raised': true
			}
		};

		yield this.invokeAction('controller-action', 'displayModal', modalData);
	}).drop(),

	'_confirmedDeleteGroup': task(function* (subGroup) {
		const parentGroup = yield subGroup.get('parent');

		const groupSiblings = yield parentGroup.get('groups');
		groupSiblings.removeObject(subGroup);

		const tenantGroups = yield this.get('model.groups');
		tenantGroups.removeObject(subGroup);

		if(subGroup.get('isNew'))
			subGroup.deleteRecord();
		else
			yield subGroup.destroyRecord();
	}).drop().evented().retryable(backoffPolicy),

	'_confirmedDeleteGroupSucceeded': on('_confirmedDeleteGroup:succeeded', function(taskInstance) {
		this.get('notification').display({
			'type': 'success',
			'message': `${taskInstance.args[0].get('displayName')} deleted successfully`
		});
	}),

	'_confirmedDeleteGroupErrored': on('_confirmedDeleteGroup:errored', function(taskInstance, err) {
		const subGroup = taskInstance.args[0];
		subGroup.rollback();
		subGroup.reload({
			'include': 'tenant, parent, groups, tenantUserGroups, featurePermissions'
		});

		const parentGroup = subGroup.get('parent');
		const groupSiblings = parentGroup.get('groups');
		groupSiblings.addObject(subGroup);

		this.get('notification').display({
			'type': 'error',
			'error': err
		});
	})
});
