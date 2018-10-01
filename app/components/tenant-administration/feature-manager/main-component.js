import BaseComponent from '../../../framework/base-component';
import ExponentialBackoffPolicy from 'ember-concurrency-retryable/policies/exponential-backoff';

import { task } from 'ember-concurrency';

const backoffPolicy = new ExponentialBackoffPolicy({
	'multiplier': 1.5,
	'minDelay': 30,
	'maxDelay': 400
});

export default BaseComponent.extend({
	didInsertElement() {
		this._super(...arguments);
		this.$('div.md-subheader-inner').addClass('pb-0');
	},

	changeSelectedFeature(feature) {
		this.invokeAction('controller-action', 'setSelectedFeature', feature);
	},

	modifyTenantFeatureStatus: task(function* () {
		const tenantFeatures = yield this.get('selectedFeature.tenantFeatures');

		let tenantFeature = tenantFeatures.filter((tenantFeature) => {
			return tenantFeature.get('tenant.id') === window.twyrTenantId;
		}).shift();

		if(tenantFeature) {
			try {
				this.get('selectedFeature.tenantFeatures').removeObject(tenantFeature);
				yield tenantFeature.destroyRecord();
			}
			catch(err) {
				tenantFeature.rollback();
				this.get('selectedFeature.tenantFeatures').addObject(tenantFeature);
			}

			return;
		}

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
		}
	}).drop().retryable(backoffPolicy)
});
