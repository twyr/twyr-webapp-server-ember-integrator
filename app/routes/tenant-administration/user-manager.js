import BaseRoute from '../../framework/base-route';

import { task } from 'ember-concurrency';

export default BaseRoute.extend({
	init() {
		this._super(...arguments);
		this.get('currentUser').on('userDataUpdated', this, 'onUserDataUpdated');
	},

	destroy() {
		this.get('currentUser').off('userDataUpdated', this, 'onUserDataUpdated');
		this._super(...arguments);
	},

	model() {
		if(!window.twyrTenantId) {
			this.get('store').unloadAll('tenant-administration/user-manager/tenant-user');
			this.get('store').unloadAll('tenant-administration/user-manager/user');
			this.get('store').unloadAll('tenant-administration/user-manager/user-contact');
			return;
		}

		const tenantUserData =  this.get('store').peekAll('tenant-administration/user-manager/tenant-user');
		if(tenantUserData.get('length')) return tenantUserData;

		return this.get('store').findAll('tenant-administration/user-manager/tenant-user', {
			'include': 'tenant, user, user.contacts'
		});
	},

	onUserDataUpdated() {
		if(!window.twyrTenantId) {
			this.get('store').unloadAll('tenant-administration/user-manager/tenant-user');
			this.get('store').unloadAll('tenant-administration/user-manager/user');
			this.get('store').unloadAll('tenant-administration/user-manager/user-contact');
		}

		const isActive = this.get('router').get('currentRouteName').includes(this.get('fullRouteName'));
		if(!isActive) return;

		if(!window.twyrTenantId) {
			this.transitionTo('index');
			return;
		}

		this.get('refreshTenantUserModel').perform();
	},

	'refreshTenantUserModel': task(function* () {
		let tenantUserData =  this.get('store').peekAll('tenant-administration/user-manager/tenant-user');
		if(!tenantUserData.get('length')) {
			tenantUserData = yield this.get('store').findAll('tenant-administration/user-manager/tenant-user', {
				'include': 'tenant, user, user.contacts'
			});
		}

		this.get('controller').set('model', tenantUserData);
	}).keepLatest()
});
