import BaseModel from '../../../framework/base-model';
import DS from 'ember-data';

export default BaseModel.extend({
	'group': DS.belongsTo('tenant-administration/group-manager/tenant-group', {
		'async': true,
		'inverse': 'permissions'
	}),

	'featurePermission': DS.belongsTo('server-administration/feature-permission', {
		'async': true,
		'inverse': 'tenantGroupPermissions'
	})
});
