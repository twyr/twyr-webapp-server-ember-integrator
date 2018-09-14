import BaseController from '../framework/base-controller';
import ExponentialBackoffPolicy from 'ember-concurrency-retryable/policies/exponential-backoff';

import { task } from 'ember-concurrency';

const backoffPolicy = new ExponentialBackoffPolicy({
	'multiplier': 1.5,
	'minDelay': 30,
	'maxDelay': 400
});

export default BaseController.extend({
	save: task(function* () {
		yield this.get('model').save();
	}).drop().retryable(backoffPolicy),

	cancel: task(function* () {
		yield this.get('model').rollback();
	}).drop()
});
