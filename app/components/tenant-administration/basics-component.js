import BaseComponent from '../../framework/base-component';
import ExponentialBackoffPolicy from 'ember-concurrency-retryable/policies/exponential-backoff';
import computedStyle from 'ember-computed-style';

import { computed } from '@ember/object';
import { observer } from '@ember/object';
import { task } from 'ember-concurrency';

const backoffPolicy = new ExponentialBackoffPolicy({
	'multiplier': 1.5,
	'minDelay': 30,
	'maxDelay': 400
});

export default BaseComponent.extend({
	classNames: ['flex-100', 'flex-gt-sm-50', 'flex-gt-md-40', 'flex-gt-lg-30'],
	readonly: true,

	attributeBindings: ['style'],
	style: computedStyle('display'),

	display: computed('hasPermission', function() {
		return { 'display': (this.get('hasPermission') ? 'flex' : 'none') };
	}),

	init() {
		this._super(...arguments);
		this.set('permissions', ['tenant-administration-read']);
	},

	onHasPermissionChange: observer('hasPermission', function() {
		if(!this.get('hasPermission')) {
			this.set('readonly', true);
			return;
		}

		const updatePerm = this.get('currentUser').hasPermission('tenant-administration-update');
		if(updatePerm) this.set('readonly', false);
	}),

	save: task(function* () {
		try {
			yield this.get('model').save();
			this.get('notification').display({
				'type': 'success',
				'message': 'Tenant saved successfully'
			});
		}
		catch(err) {
			this.get('notification').display({
				'type': 'error',
				'error': err
			});
		}
	}).drop().retryable(backoffPolicy),

	cancel: task(function* () {
		yield this.get('model').rollback();
	}).drop()
});
