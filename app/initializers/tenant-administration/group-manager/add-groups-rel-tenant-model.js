import TenantModel from '../../../models/tenant-administration/tenant';
import DS from 'ember-data';

export function initialize( /* application */ ) {
	// application.inject('route', 'foo', 'service:foo');
	TenantModel.reopen({
		'groups': DS.hasMany('tenant-administration/group-manager/tenant-group', {
			'async': true,
			'inverse': 'tenant'
		})
	});
}

export default {
	initialize
};
