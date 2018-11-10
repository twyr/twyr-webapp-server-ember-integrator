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
		yield this.get('model').save();
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
	}).drop()
});
