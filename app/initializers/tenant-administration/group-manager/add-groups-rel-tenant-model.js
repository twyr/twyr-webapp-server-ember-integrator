import DS from 'ember-data';

import FeaturePermissionModel from '../../../models/server-administration/feature-permission';
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

	FeaturePermissionModel.reopen({
		'tenantGroups': DS.hasMany('tenant-administration/group-manager/tenant-group', {
			'async': true,
			'inverse': 'featurePermissions'
		})
	});
}

export default {
	initialize
};
