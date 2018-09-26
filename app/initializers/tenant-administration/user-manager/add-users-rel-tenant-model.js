import DS from 'ember-data';
import TenantModel from '../../../models/tenant-administration/tenant';

export function initialize(/* application */) {
  // application.inject('route', 'foo', 'service:foo');
  TenantModel.reopen({
	'users': DS.hasMany('tenant-administration/user-manager/tenant-user', {
		'async': true,
		'inverse': 'tenant'
	})
  });
}

export default {
  initialize
};
