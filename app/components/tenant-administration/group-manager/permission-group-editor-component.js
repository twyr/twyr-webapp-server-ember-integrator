import BaseComponent from '../../../framework/base-component';
import ExponentialBackoffPolicy from 'ember-concurrency-retryable/policies/exponential-backoff';

import { computed } from '@ember/object';
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

	'groupPermissionIdList': computed('selectedGroup', 'selectedGroup.permissions.[]', function() {
		return this.get('_groupPermissionIdList').perform();
	}),

	'_groupPermissionIdList': task(function* () {
		const permissionList = yield this.get('selectedGroup.permissions');
		return permissionList.mapBy('featurePermission.id');
	}).keepLatest(),

	'toggleGroupPermission': task(function* (parentGroupPermission) {
		const groupPermissions = yield this.get('selectedGroup.permissions');
		const alreadyAdded = groupPermissions.filterBy('featurePermission.id', parentGroupPermission.get('featurePermission.id')).objectAt(0);

		if(alreadyAdded) {
			yield alreadyAdded.destroyRecord();
			return;
		}

		const newGroupPermission = this.get('store').createRecord('tenant-administration/group-manager/tenant-group-permission', {
			'group': this.get('selectedGroup'),
			'featurePermission': parentGroupPermission.get('featurePermission')
		});

		yield newGroupPermission.save();
	}).enqueue().evented().retryable(backoffPolicy),

	'toggleGroupPermissionSucceeded': on('toggleGroupPermission:succeeded', function (taskInstance) {
		this.get('notification').display({
			'type': 'success',
			'message': `${taskInstance.args[0].get('featurePermission.displayName')} permission successfully modified in ${this.get('selectedGroup.displayName')}`
		});
	}),

	'toggleGroupPermissionErrored': on('toggleGroupPermission:errored', function (taskInstance, err) {
		const groupPermissions = this.get('selectedGroup.permissions');
		let alreadyAdded = groupPermissions.filterBy('featurePermission.id', taskInstance.args[0].get('featurePermission.id')).objectAt(0);

		if(!alreadyAdded) {
			alreadyAdded = this.get('store').peekAll('tenant-administration/group-manager/tenant-group-permission').filterBy('group.id', this.get('selectedGroup.id')).filterBy('featurePermission.id', taskInstance.args[0].get('featurePermission.id')).objectAt(0);
		}


		if(alreadyAdded) alreadyAdded.rollback();
		this.get('notification').display({
			'type': 'error',
			'error': err
		});
	}),
});
