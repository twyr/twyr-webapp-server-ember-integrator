import Component from '@ember/component';
import Evented from '@ember/object/evented';

import { InvokeActionMixin } from 'ember-invoke-action';
import { ContextBoundTasksMixin, ContextBoundEventListenersMixin, DisposableMixin } from 'ember-lifeline';

import { inject } from '@ember/service';
import { observer } from '@ember/object';
import { on } from '@ember/object/evented';

export default Component.extend(ContextBoundTasksMixin, ContextBoundEventListenersMixin, DisposableMixin, Evented, InvokeActionMixin, {
	ajax: inject('ajax'),
	store: inject('store'),
	currentUser: inject('current-user'),
	notification: inject('integrated-notification'),

	permissions: null,
	hasPermission: false,

	init() {
		this._super(...arguments);
		this.set('permissions', ['*']);

		this.get('currentUser').on('userDataUpdated', this, 'updatePermissions');
	},

	destroy() {
		this.get('currentUser').off('userDataUpdated', this, 'updatePermissions');
		this._super(...arguments);
	},

	// eslint-disable-next-line ember/no-on-calls-in-components
	onPermissionChanges: on('init', observer('permissions', 'permissions.[]', 'permissions.@each', function() {
		this.updatePermissions();
	})),

	updatePermissions() {
		let hasPerm = false;
		if(this.get('permissions').includes('*')) {
			hasPerm = true;
		}
		else {
			const requiredPermissions = this.get('permissions');
			for(let permIdx = 0; permIdx < requiredPermissions.length; permIdx++) {
				const hasCurrentPermission = this.get('currentUser').hasPermission(requiredPermissions[permIdx]);

				hasPerm = hasPerm || hasCurrentPermission;
				if(hasPerm) break;
			}
		}

		if(hasPerm === this.get('hasPermission'))
			return;

		this.set('hasPermission', hasPerm);
	},

	actions: {
		'controller-action': function(action, data) {
			if(this[action] && (typeof this[action] === 'function')) {
				this[action](data);
				return;
			}

			this.invokeAction('controller-action', action, data);
		}
	}
});
