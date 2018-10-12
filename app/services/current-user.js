import Evented from '@ember/object/evented';
import Service from '@ember/service';

import { inject } from '@ember/service';
import { task } from 'ember-concurrency';

export default Service.extend(Evented, {
	ajax: inject('ajax'),
	notification: inject('integrated-notification'),
	userData: null,

	onInit: task(function* () {
		const fetchUserData = this.get('fetchUserData');
		yield fetchUserData.perform();

		window.TwyrApp.on('userChanged', this, this.onUserChanged);
	}).on('init').drop(),

	destroy() {
		window.TwyrApp.off('userchanged', this, this.onUserChanged);
		this._super(...arguments);
	},

	onUserChanged() {
		const fetchUserData = this.get('fetchUserData');
		fetchUserData.perform();
	},

	fetchUserData: task(function* () {
		this.trigger('userDataUpdating');

		try {
			const userData = yield this.get('ajax').request('/session/user', { 'method': 'GET' });

			this.set('userData', userData);

			if(userData.loggedIn) {
				window.twyrUserId = userData['user_id'];
				window.twyrTenantId = userData['tenant_id'];
			}
			else {
				window.twyrUserId = null;
				window.twyrTenantId = null;
			}

			this.trigger('userDataUpdated');
		}
		catch(err) {
			this.set('userData', null);
			window.twyrUserId = null;
			window.twyrTenantId = null;

			this.trigger('userDataUpdated');
			this.get('notification').display({
				'type': 'error',
				'error': err
			});
		}
	}).keepLatest(),

	isLoggedIn() {
		return this.get('userData.loggedIn');
	},

	hasPermission(permission) {
		const userPermissions = this.get('userData.permissions') || [];
		return userPermissions.includes(permission);
	},

	getUser() {
		return this.get('userData');
	}
});
