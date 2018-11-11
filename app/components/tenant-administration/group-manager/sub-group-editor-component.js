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

	'changeDefaultForNewUser': task(function* (subGroup) {
		const loadedGroups = this.get('store').peekAll('tenant-administration/group-manager/tenant-group');
		let oldDefaultGroup = null;

		loadedGroups.forEach((tenantGroup) => {
			if(tenantGroup.get('id') === subGroup.get('id'))
				return;

			if(!tenantGroup.get('defaultForNewUser'))
				return;

			tenantGroup.set('defaultForNewUser', false);
			oldDefaultGroup = tenantGroup;
		});

		subGroup.set('defaultForNewUser', true);
		yield subGroup.save();

		if(oldDefaultGroup)
		yield oldDefaultGroup.reload({
			'include': 'parent, groups'
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
		this.get('notification').display({
			'type': 'error',
			'error': err
		});
	})
});
