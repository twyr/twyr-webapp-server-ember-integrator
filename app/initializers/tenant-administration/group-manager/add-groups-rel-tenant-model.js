import DS from 'ember-data';
import TenantModel from '../../../models/tenant-administration/tenant';
import TenantUserModel from '../../../models/tenant-administration/user-manager/tenant-user';

export function initialize( /* application */ ) {
	// application.inject('route', 'foo', 'service:foo');
	TenantModel.reopen({
		'groups': DS.hasMany('tenant-administration/group-manager/tenant-group', {
			'async': true,
			'inverse': 'tenant'
		})
	});

	TenantUserModel.reopen({
		'tenantUserGroups': DS.hasMany('tenant-administration/group-manager/tenant-user-group', {
			'async': true,
			'inverse': 'tenantUser'
		})
	});
}

export default {
	initialize
};
