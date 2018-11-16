import BaseModel from '../../../framework/base-model';
import DS from 'ember-data';

import { computed } from '@ember/object';
import { observer } from '@ember/object';
import { task } from 'ember-concurrency';

export default BaseModel.extend({
	'name': DS.attr('string'),
	'displayName': DS.attr('string'),
	'description': DS.attr('string'),
	'defaultForNewUser': DS.attr('boolean', { 'defaultValue': false }),

	'tenant': DS.belongsTo('tenant-administration/tenant', {
		'async': true,
		'inverse': 'groups'
	}),

	'parent': DS.belongsTo('tenant-administration/group-manager/tenant-group', {
		'async': true,
		'inverse': 'groups'
	}),

	'groups': DS.hasMany('tenant-administration/group-manager/tenant-group', {
		'async': true,
		'inverse': 'parent'
	}),

	'tenantUserGroups': DS.hasMany('tenant-administration/group-manager/tenant-user-group', {
		'async': true,
		'inverse': 'tenantGroup'
	}),

	'path': computed('parent', 'parent.path', {
		get() {
			return this.get('computePath').perform();
		}
	}),

	'computePath': task(function* () {
		const parentGroup = yield this.get('parent');
		if(!parentGroup) return this.get('displayName');

		const parentGroupPath = yield parentGroup.get('path');
		if(!parentGroupPath) return this.get('displayName');

		return `${parentGroupPath} > ${this.get('displayName')}`;
	}).keepLatest(),

	'onDisplayNameChanged': observer('displayName', function() {
		this.set('name', this.get('displayName').dasherize());
	})
});
