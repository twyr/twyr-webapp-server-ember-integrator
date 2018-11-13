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
			this.get('store').unloadAll('tenant-administration/group-manager/tenant-group');
			return;
		}

		const tenantModel = this.modelFor('tenant-administration');
		console.log(`Tenant Model (Route): `, tenantModel);
		return tenantModel;
	},

	onUserDataUpdated() {
		if(!window.twyrTenantId) {
			this.get('store').unloadAll('tenant-administration/group-manager/tenant-group');
		}

		const isActive = this.get('router').get('currentRouteName').includes(this.get('fullRouteName'));
		if(!isActive) return;

		if(!window.twyrTenantId) {
			this.transitionTo('index');
			return;
		}

		this.get('refreshTenantGroupModel').perform();
	},

	'refreshTenantGroupModel': task(function* () {
		let tenantModel =  this.get('store').peekRecord('tenant-administration/tenant', window.twyrTenantId);
		if(!tenantModel) {
			tenantModel = yield this.get('store').findRecord('tenant-administration/tenant', window.twyrTenantId, {
				'include': 'location'
			});
		}

		console.log(`Tenant Model (Controller): `, tenantModel);
		this.get('controller').set('model', tenantModel);
	}).keepLatest()
});
