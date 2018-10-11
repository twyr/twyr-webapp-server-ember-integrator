import DS from 'ember-data';

import TenantModel from '../../../models/tenant-administration/tenant';
import FeatureModel from '../../../models/server-administration/feature';

import { computed } from '@ember/object';
import { task } from 'ember-concurrency';

export function initialize( /* application */ ) {
	// application.inject('route', 'foo', 'service:foo');
	TenantModel.reopen({
		'tenantFeatures': DS.hasMany('tenant-administration/feature-manager/tenant-feature', {
			'async': true,
			'inverse': 'tenant'
		})
	});

	FeatureModel.reopen({
		'tenantFeatures': DS.hasMany('tenant-administration/feature-manager/tenant-feature', {
			'async': true,
			'inverse': 'feature'
		}),

		'isTenantSubscribed': computed('tenantFeatures', 'tenantFeatures.length', 'parent.isTenantSubscribed', {
			get() {
				return this.get('computeTenantSubscription').perform();
			}
		}),

		'computeTenantSubscription': task(function* () {
			const isFeatureSubscribed = this.get('tenantFeatures.length');
			if(!isFeatureSubscribed) return false;

			const parentModule = yield this.get('parent');
			if(!parentModule) return true;

			const isParentSubscribed = yield parentModule.get('isTenantSubscribed');
			return isParentSubscribed;
		}).keepLatest()
	});
}

export default {
	initialize
};
