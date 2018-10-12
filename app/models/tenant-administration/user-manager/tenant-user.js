import BaseModel from '../../../framework/base-model';
import DS from 'ember-data';

export default BaseModel.extend({
	'accessStatus': DS.attr('string', { 'defaultValue': 'waiting' }),

	'tenant': DS.belongsTo('tenant-administration/tenant', {
		'async': true,
		'inverse': 'tenantUsers'
	}),

	'user': DS.belongsTo('tenant-administration/user-manager/user', {
		'async': true,
		'inverse': 'tenantUsers'
	})
});
