import BaseRoute from '../../framework/base-route';

export default BaseRoute.extend({
	parentController: null,
	init() {
		this._super(...arguments);
		this.set('parentController', this.controllerFor('tenant-administration'));

		this.get('parentController').addObserver('model', this, 'onParentModelChange');
		this.get('currentUser').on('userDataUpdated', this, 'onUserDataUpdated');
	},

	destroy() {
		this.get('currentUser').off('userDataUpdated', this, 'onUserDataUpdated');
		this.get('parentController').removeObserver('model', this, 'onParentModelChange');
		this._super(...arguments);
	},

	setupController(controller) {
		const parentModel = this.get('parentController.model');
		controller.set('model', parentModel);
	},

	onParentModelChange() {
		const parentModel = this.get('parentController.model');
		const thisController = this.get('controller');
		if(!thisController) return;

		thisController.set('model', parentModel);
	},

	onUserDataUpdated() {
		if(!window.twyrTenantId) {
			this.get('store').unloadAll('tenant-administration/user-manager/tenant-user');
			return;
		}
	}
});
