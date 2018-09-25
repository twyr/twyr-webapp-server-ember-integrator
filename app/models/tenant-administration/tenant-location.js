import BaseModel from '../../framework/base-model';
import DS from 'ember-data';

export default BaseModel.extend({
	'tenant': DS.belongsTo('tenant-administration/tenant', {
		'async': true,
		'inverse': 'location'
	}),

	'name': DS.attr('string', { 'defaultValue': '' }),
	'line1': DS.attr('string', { 'defaultValue': '' }),
	'line2': DS.attr('string', { 'defaultValue': '' }),
	'line3': DS.attr('string', { 'defaultValue': '' }),
	'area': DS.attr('string', { 'defaultValue': '' }),
	'city': DS.attr('string', { 'defaultValue': '' }),
	'state': DS.attr('string', { 'defaultValue': '' }),
	'country': DS.attr('string', { 'defaultValue': '' }),
	'postalCode': DS.attr('string', { 'defaultValue': '' }),

	'latitude': DS.attr('number', { 'defaultValue': 0 }),
	'longitude': DS.attr('number', { 'defaultValue': 0 }),

	'timezoneId': DS.attr('string', { 'defaultValue': 'Asia/Kolkata' }),
	'timezoneName': DS.attr('string', { 'defaultValue': 'India Standard Time' }),

	'isPrimary': DS.attr('boolean', { 'defaultValue': false })
});
