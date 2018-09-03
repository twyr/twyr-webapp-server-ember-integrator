/* eslint-disable require-yield */
/* eslint-disable no-console */

import Controller from '@ember/controller';
import { inject } from '@ember/service';
import { observer } from '@ember/object';
import { task } from 'ember-concurrency';

export default Controller.extend({
	store: inject('store'),
	currentUser: inject('current-user'),
	notification: inject('integrated-notification'),

	permissions: null,
	hasPermission: true,

	init() {
		this._super(...arguments);
		this.set('permissions', ['*']);

		this.get('currentUser').on('userDataUpdated', () => {
			this.get('updatePermissions').perform();
		});
	},

	onPermissionChanges: observer('permissions', function() {
		this.get('updatePermissions').perform();
	}),

	updatePermissions: task(function* () {
		if(this.get('permissions').includes('*')) {
			this.set('hasPermission', true);
			return;
		}

		let hasPerm = false;
		this.get('permissions').forEach((permission) => {
			hasPerm = hasPerm || this.get('currentUser').hasPermission(permission);
		});

		this.set('hasPermission', hasPerm);
	}).keepLatest()
});
