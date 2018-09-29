import BaseModel from '../../framework/base-model';
import DS from 'ember-data';

import { computed } from '@ember/object';
import { task } from 'ember-concurrency';

export default BaseModel.extend({
	'name': DS.attr('string'),
	'displayName': DS.attr('string'),
	'deploy': DS.attr('string', { 'defaultValue': 'default' }),
	'description': DS.attr('string'),
	'type': DS.attr('string'),

	'parent': DS.belongsTo('server-administration/feature', {
		'async': true,
		'inverse': 'features'
	}),

	'features': DS.hasMany('server-administration/feature', {
		'async': true,
		'inverse': 'parent'
	}),

	'permissions': DS.hasMany('server-administration/feature-permission', {
		'async': true,
		'inverse': 'feature'
	}),

	'path': computed('parent', 'parent.path', {
		get() {
			return this.get('computePath').perform();
		}
	}),

	'computePath': task(function* () {
		const parentModule = yield this.get('parent');
		if(!parentModule) return this.get('displayName');

		const parentModulePath = yield parentModule.get('path');
		if(!parentModulePath) return this.get('displayName');

		return `${parentModulePath} > ${this.get('displayName')}`;
	}).keepLatest()
});
