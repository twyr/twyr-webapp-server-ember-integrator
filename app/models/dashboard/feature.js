import BaseModel from '../../framework/base-model';
import DS from 'ember-data';

export default BaseModel.extend({
	'name': DS.attr('string'),
	'type': DS.attr('string'),
	'route': DS.attr('string'),
	'description': DS.attr('string'),

	'iconType': DS.attr('string'),
	'iconPath': DS.attr('string')
});
