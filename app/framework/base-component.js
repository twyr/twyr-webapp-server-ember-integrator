/* eslint-disable require-yield */
/* eslint-disable no-console */

/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
/* eslint-disable ember/closure-actions */

import Component from '@ember/component';
import { observer } from '@ember/object';
import { inject } from '@ember/service';
import { task } from 'ember-concurrency';

export default Component.extend({
	'store': inject('store'),
	'currentUser': inject('current-user'),

	'permissions': ['*'],
	'hasPermission': false,

	'onInit': task(function* () {
		this.get('currentUser').on('userDataUpdated', () => {
			this.get('updatePermissions').perform();
		});
	}).on('init'),

	'updatePermissions': task(function* () {
		if(this.get('permissions').includes('*')) {
			this.set('hasPermission', true);
			return;
		}

		let hasPermission = false;
		this.get('permissions').forEach((permission) => {
			hasPermission = hasPermission || this.get('currentUser').hasPermission(permission);
		});

		this.set('hasPermission', hasPermission);
	}).keepLatest(),

	'hasPermissionChanged': observer('hasPermission', function() {
		console.log(`User Permissions changed: ${this.get('hasPermission')}`);
	}),

	'actions': {
		'controller-action': function(action, data) {
			if(this[action] && (typeof this[action] === 'function')) {
				this[action](data);
				return;
			}

			this.sendAction('controller-action', action, data);
		}
	}
});
