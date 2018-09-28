import BaseComponent from '../../framework/base-component';
import ExponentialBackoffPolicy from 'ember-concurrency-retryable/policies/exponential-backoff';

import { task } from 'ember-concurrency';

const backoffPolicy = new ExponentialBackoffPolicy({
	'multiplier': 1.5,
	'minDelay': 30,
	'maxDelay': 400
});

export default BaseComponent.extend({
	classNames: ['flex-100', 'flex-gt-sm-50', 'flex-gt-md-40', 'flex-gt-lg-30'], // eslint-disable-line ember/avoid-leaking-state-in-ember-objects

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
