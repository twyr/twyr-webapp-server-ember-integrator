import BaseComponent from '../../../framework/base-component';
import ExponentialBackoffPolicy from 'ember-concurrency-retryable/policies/exponential-backoff';

import { task } from 'ember-concurrency';

import computedStyle from 'ember-computed-style';

import { computed } from '@ember/object';
import { observer } from '@ember/object';

const backoffPolicy = new ExponentialBackoffPolicy({
	'multiplier': 1.5,
	'minDelay': 30,
	'maxDelay': 400
});

export default BaseComponent.extend({
	attributeBindings: ['style'],
	style: computedStyle('display'),

	display: computed('hasPermission', function() {
		return { 'display': (this.get('hasPermission') ? 'flex' : 'none') };
	}),

	init() {
		this._super(...arguments);
		this.set('permissions', ['feature-administration-read']);
	},

	onHasPermissionChange: observer('hasPermission', function() {
		if(!this.get('hasPermission')) {
			this.set('readonly', true);
			return;
		}

		const updatePerm = this.get('currentUser').hasPermission('feature-administration-update');
		if(updatePerm) this.set('readonly', false);
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
			}

			return;
		}

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
		}
	}).drop().retryable(backoffPolicy)
});
