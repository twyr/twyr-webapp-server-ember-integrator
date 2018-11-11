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

	init() {
		this._super(...arguments);
		this.set('permissions', ['group-manager-read']);
	},

	onHasPermissionChange: observer('hasPermission', function() {
		const updatePerm = this.get('currentUser').hasPermission('group-manager-update');
		this.set('editable', updatePerm);
	}),

	changeSelectedGroup(tenantGroup) {
		this.invokeAction('controller-action', 'setSelectedGroup', tenantGroup);
	},

	'saveGroup': task(function* () {
		const didDefaultForNewUserChange = this.get('model').didChange('defaultForNewUser');

		yield this.get('model').save();
		if(!didDefaultForNewUserChange) return;

		const loadedGroups = this.get('store').peekAll('tenant-administration/group-manager/tenant-group');
		let oldDefaultGroup = null;

		loadedGroups.forEach((tenantGroup) => {
			if(tenantGroup.get('id') === this.get('model.id'))
				return;

			if(!tenantGroup.get('defaultForNewUser'))
				return;

			tenantGroup.set('defaultForNewUser', false);
			oldDefaultGroup = tenantGroup;
		});

		if(oldDefaultGroup)
		yield oldDefaultGroup.reload({
			'include': 'parent, groups'
		});
	}).drop().evented().retryable(backoffPolicy),

	'saveGroupSucceeded': on('saveGroup:succeeded', function () {
		this.get('notification').display({
			'type': 'success',
			'message': `Changes to ${this.get('model.displayName')} saved successfully`
		});
	}),

	'saveGroupErrored': on('saveGroup:errored', function (taskInstance, err) {
		this.get('model').rollback();
		this.get('notification').display({
			'type': 'error',
			'error': err
		});
	}),

	'cancelGroup': task(function* () {
		yield this.get('model').rollback();
	}).drop(),

	'deleteGroup': task(function* () {
		const modalData = {
			'title': 'Delete Group',
			'content': `Are you sure you want to delete the <strong>${this.get('model.displayName')}</strong> group?`,

			'confirmButton': {
				'text': 'Delete',
				'icon': 'delete',

				'warn': true,
				'raised': true,

				'callback': () => {
					this.get('_confirmedDeleteGroup').perform();
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

	'_confirmedDeleteGroup': task(function* () {
		const parentGroup = yield this.get('model.parent');
		const groupSiblings = yield parentGroup.get('groups');

		yield this.get('model').destroyRecord();

		groupSiblings.removeObject(this.get('model'));
		this.invokeAction('controller-action', 'setSelectedGroup', parentGroup);
	}).drop().evented().retryable(backoffPolicy),

	'_confirmedDeleteGroupSucceeded': on('_confirmedDeleteGroup:succeeded', function() {
		this.get('notification').display({
			'type': 'success',
			'message': `Changes to ${this.get('model.displayName')} deleted successfully`
		});
	}),

	'_confirmedDeleteGroupErrored': on('_confirmedDeleteGroup:errored', function(taskInstance, err) {
		this.get('model').rollback();

		const parentGroup = this.get('model.parent');

		const groupSiblings = parentGroup.get('groups');
		groupSiblings.addObject(this.get('model'));

		this.invokeAction('controller-action', 'setSelectedGroup', this.get('model'));
		this.get('notification').display({
			'type': 'error',
			'error': err
		});
	})
});
