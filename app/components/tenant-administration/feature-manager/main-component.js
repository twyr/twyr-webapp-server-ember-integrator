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
		this.set('permissions', ['feature-manager-read']);
	},

	onHasPermissionChange: observer('hasPermission', function() {
		const updatePerm = this.get('currentUser').hasPermission('feature-manager-update');
		this.set('editable', updatePerm);
	}),

	changeSelectedFeature(feature) {
		this.invokeAction('controller-action', 'setSelectedFeature', feature);
	},

	modifyTenantFeatureStatus: task(function* () {
		const tenantFeatures = yield this.get('model.tenantFeatures');

		let tenantFeature = tenantFeatures.filter((tenantFeature) => {
			return tenantFeature.get('tenant.id') === window.twyrTenantId;
		}).shift();

		if(tenantFeature) {
			try {
				this.get('model.tenantFeatures').removeObject(tenantFeature);
				yield tenantFeature.destroyRecord();
			}
			catch(err) {
				tenantFeature.rollback();
				this.get('model.tenantFeatures').addObject(tenantFeature);

				throw err;
			}

			yield this.get('removeSubFeatures').perform(this.get('model'));
		}
		else {
			const tenant = this.get('store').peekRecord('tenant-administration/tenant', window.twyrTenantId);
			tenantFeature = this.get('store').createRecord('tenant-administration/feature-manager/tenant-feature', {
				'tenant': tenant,
				'feature': this.get('model')
			});

			try {
				this.get('model.tenantFeatures').addObject(tenantFeature);
				yield tenantFeature.save();
			}
			catch(err) {
				this.get('model.tenantFeatures').removeObject(tenantFeature);
				tenantFeature.deleteRecord();

				throw err;
			}

			yield this.get('addSubFeatures').perform(this.get('model'));
		}
	}).drop().retryable(backoffPolicy),

	addSubFeatures: task(function* (serverFeature) {
		const tenant = this.get('store').peekRecord('tenant-administration/tenant', window.twyrTenantId);
		const subFeatures = yield serverFeature.get('features');

		for(let idx = 0; idx < subFeatures.get('length'); idx++) {
			const subFeature = subFeatures.objectAt(idx);
			if(subFeature.get('deploy') === 'custom')
				continue;

			const tenantFeature = this.get('store').createRecord('tenant-administration/feature-manager/tenant-feature', {
				'tenant': tenant,
				'feature': subFeature
			});

			const subTenantFeatures = yield subFeature.get('tenantFeatures');
			subTenantFeatures.addObject(tenantFeature);

			yield this.get('addSubFeatures').perform(subFeature);
		}
	}),

	removeSubFeatures: task(function* (serverFeature) {
		const subFeatures = yield serverFeature.get('features');
		for(let idx = 0; idx < subFeatures.get('length'); idx++) {
			const subFeature = subFeatures.objectAt(idx);

			const subTenantFeatures = yield subFeature.get('tenantFeatures');
			subTenantFeatures.clear();

			yield this.get('removeSubFeatures').perform(subFeature);
		}
	})
});
