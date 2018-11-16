import BaseModel from '../../../framework/base-model';
import DS from 'ember-data';

export default BaseModel.extend({
	'tenantGroup': DS.belongsTo('tenant-administration/group-manager/tenant-group', {
		'async': true,
		'inverse': 'tenantUserGroups'
	}),

	'tenantUser': DS.belongsTo('tenant-administration/user-manager/tenant-user', {
		'async': true,
		'inverse': 'tenantUserGroups'
	})
});
