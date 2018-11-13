import BaseRoute from '../../framework/base-route';

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
			this.get('store').unloadAll('tenant-administration/feature-manager/tenant-feature');
			this.get('store').unloadAll('server-administration/feature');
			this.get('store').unloadAll('server-administration/feature-permission');

			return;
		}

		const tenantModel = this.modelFor('tenant-administration');
		return tenantModel;
	},

	onUserDataUpdated() {
		if(!window.twyrTenantId) {
			this.get('store').unloadAll('tenant-administration/feature-manager/tenant-feature');
			this.get('store').unloadAll('server-administration/feature');
			this.get('store').unloadAll('server-administration/feature-permission');
		}

		const isActive = this.get('router').get('currentRouteName').includes(this.get('fullRouteName'));
		if(!isActive) return;

		if(!window.twyrTenantId) {
			this.transitionTo('index');
			return;
		}
	}
});
