import BaseComponent from '../../../framework/base-component';
import ExponentialBackoffPolicy from 'ember-concurrency-retryable/policies/exponential-backoff';

import { observer } from '@ember/object';
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
		this.set('permissions', ['feature-manager-read']);
	},

	'onHasPermissionChange': observer('hasPermission', function() {
		const updatePerm = this.get('currentUser').hasPermission('feature-manager-update');
		this.set('editable', updatePerm);
	}),

	'modifyTenantFeatureStatus': task(function* () {
		if(!this.get('selectedFeature'))
			return;

		const tenantFeatures = yield this.get('selectedFeature.tenantFeatures');
		let tenantFeature = tenantFeatures.get('firstObject');

		if(tenantFeature) {
			try {
				this.get('selectedFeature.tenantFeatures').removeObject(tenantFeature);
				yield tenantFeature.destroyRecord();
			}
			catch(err) {
				tenantFeature.rollback();
				this.get('selectedFeature.tenantFeatures').addObject(tenantFeature);

				throw err;
			}
		}
		else {
			const tenant = this.get('store').peekRecord('tenant-administration/tenant', window.twyrTenantId);
			tenantFeature = this.get('store').createRecord('tenant-administration/feature-manager/tenant-feature', {
				'tenant': tenant,
				'feature': this.get('selectedFeature')
			});

			try {
				this.get('selectedFeature.tenantFeatures').addObject(tenantFeature);
				yield tenantFeature.save();
			}
			catch(err) {
				this.get('selectedFeature.tenantFeatures').removeObject(tenantFeature);
				tenantFeature.deleteRecord();

				throw err;
			}
		}
	}).drop().retryable(backoffPolicy)
});
