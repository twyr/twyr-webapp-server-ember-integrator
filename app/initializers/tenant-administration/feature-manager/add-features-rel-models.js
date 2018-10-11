import DS from 'ember-data';

import TenantModel from '../../../models/tenant-administration/tenant';
import FeatureModel from '../../../models/server-administration/feature';

import { computed } from '@ember/object';

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

		'isTenantSubscribed': computed('deploy', 'tenantFeatures', 'tenantFeatures.[]', {
			get() {
				return this.get('tenantFeatures.length');
			}
		})
	});
}

export default {
	initialize
};
