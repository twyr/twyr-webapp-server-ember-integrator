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

		'isTenantSubscribed': computed('tenantFeatures.[]', {
			get() {
				if(this.get('deploy') !== 'custom')
					return true;

				return this.get('getTenantFeature').perform();
			}
		}),

		'getTenantFeature': task(function* () {
			const tenantFeatures = yield this.get('tenantFeatures');

			for(let idx = 0; idx < tenantFeatures.get('length'); idx++) {
				const tenantFeature = tenantFeatures.objectAt(idx);
				const tenant = yield tenantFeature.get('tenant');

				if(tenant.get('id') === window.twyrTenantId)
					return true;
			}

			return false;
		}).keepLatest()
	});
}

export default {
	initialize
};
