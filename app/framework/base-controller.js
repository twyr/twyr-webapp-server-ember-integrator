import Controller from '@ember/controller';
import Evented from '@ember/object/evented';

import { InvokeActionMixin } from 'ember-invoke-action';

import { inject } from '@ember/service';
import { observer } from '@ember/object';
import { task } from 'ember-concurrency';

export default Controller.extend(Evented, InvokeActionMixin, {
	ajax: inject('ajax'),
	store: inject('store'),
	currentUser: inject('current-user'),
	notification: inject('integrated-notification'),

	permissions: null,
	hasPermission: true,

	init() {
		this._super(...arguments);
		this.set('permissions', ['*']);

		this.get('currentUser').on('userDataUpdated', this, this.onUserDataUpdated);
	},

	destroy() {
		this.get('currentUser').off('userDataUpdated', this, this.onUserDataUpdated);
		this._super(...arguments);
	},

	onPermissionChanges: observer('permissions', function() {
		this.get('updatePermissions').perform();
	}),

	onUserDataUpdated() {
		this.get('updatePermissions').perform();
	},

	updatePermissions: task(function* () {
		if(this.get('permissions').includes('*')) {
			this.set('hasPermission', true);
			return;
		}

		const requiredPermissions = this.get('permissions');
		let hasPerm = false;
		for(let permIdx = 0; permIdx < requiredPermissions.length; permIdx++) {
			let hasCurrentPermission = yield this.get('currentUser').hasPermission(requiredPermissions[permIdx]);
			hasPerm = hasPerm || hasCurrentPermission;
		}

		this.set('hasPermission', hasPerm);
	}).keepLatest(),

	actions: {
		'controller-action': function(action, data) {
			if(this[action] && (typeof this[action] === 'function')) {
				this[action](data);
				return;
			}

			return true;
		}
	}
});
