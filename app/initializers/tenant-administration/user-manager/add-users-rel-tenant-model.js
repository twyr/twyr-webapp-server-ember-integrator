import TenantModel from '../../../models/tenant-administration/tenant';
import DS from 'ember-data';

export function initialize( /* application */ ) {
	// application.inject('route', 'foo', 'service:foo');
	TenantModel.reopen({
		'tenantUsers': DS.hasMany('tenant-administration/user-manager/tenant-user', {
			'async': true,
			'inverse': 'tenant'
		})
	});
}

export default {
	initialize
};
