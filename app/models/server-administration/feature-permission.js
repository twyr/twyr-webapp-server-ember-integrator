import BaseModel from '../../framework/base-model';
import DS from 'ember-data';

export default BaseModel.extend({
	'name': DS.attr('string'),
	'displayName': DS.attr('string'),
	'description': DS.attr('string'),

	'feature': DS.belongsTo('server-administration/feature', {
		'async': true,
		'inverse': 'permissions'
	})
});
