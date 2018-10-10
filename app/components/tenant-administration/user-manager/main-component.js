import BaseComponent from '../../../framework/base-component';
import ExponentialBackoffPolicy from 'ember-concurrency-retryable/policies/exponential-backoff';

import { task } from 'ember-concurrency';
import { observer } from '@ember/object';

const backoffPolicy = new ExponentialBackoffPolicy({
	'multiplier': 1.5,
	'minDelay': 30,
	'maxDelay': 400
});

export default BaseComponent.extend({
	'editable': false,

	init() {
		this._super(...arguments);
		this.set('permissions', ['user-manager-read']);
	},

	onHasPermissionChange: observer('hasPermission', function() {
		const updatePerm = this.get('currentUser').hasPermission('user-manager-update');
		this.set('editable', updatePerm);
	})
});
