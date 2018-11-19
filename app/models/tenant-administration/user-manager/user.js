import BaseModel from '../../../framework/base-model';
import DS from 'ember-data';

import { computed } from '@ember/object';

export default BaseModel.extend({
	'firstName': DS.attr('string'),
	'middleNames': DS.attr('string'),
	'lastName': DS.attr('string'),
	'nickname': DS.attr('string'),

	'email': DS.attr('string'),
	'password': DS.attr('string'),

	'profileImage': DS.attr('string'),
	'profileImageMetadata': DS.attr(),

	'contacts': DS.hasMany('tenant-administration/user-manager/user-contact', {
		'async': true,
		'inverse': 'user'
	}),

	'tenantUsers': DS.hasMany('tenant-administration/user-manager/tenant-user', {
		'async': true,
		'inverse': 'user'
	}),

	'fullName': computed('firstName', 'lastName', {
		'get': function() {
			return this.get('firstName') + ' ' + this.get('lastName');
		}
	})
});
