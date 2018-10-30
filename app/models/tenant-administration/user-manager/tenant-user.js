import BaseModel from '../../../framework/base-model';
import DS from 'ember-data';

import { computed } from '@ember/object';

export default BaseModel.extend({
	'accessStatus': DS.attr('string', { 'defaultValue': 'waiting' }),

	'tenant': DS.belongsTo('tenant-administration/tenant', {
		'async': true,
		'inverse': 'tenantUsers'
	}),

	'user': DS.belongsTo('tenant-administration/user-manager/user', {
		'async': true,
		'inverse': 'tenantUsers'
	}),

	'profileImgUrl': computed('user.profileImage', {
		'get': function() {
			return `/tenant-administration/user-manager/get-image/${this.get('id')}/?random=${window.moment().valueOf()}`
		}
	})
});
