import BaseModel from '../../../framework/base-model';
import DS from 'ember-data';

export default BaseModel.extend({
	'tenant': DS.belongsTo('tenant-administration/tenant', {
		'async': true,
		'inverse': 'users'
	})
});
