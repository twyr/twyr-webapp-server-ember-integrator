import BaseRoute from '../framework/base-route';
import { task } from 'ember-concurrency';

export default BaseRoute.extend({
	init() {
		this._super(...arguments);
		this.get('currentUser').on('userDataUpdated', this, this.onUserDataUpdated);
	},

	destroy() {
		this.get('currentUser').off('userDataUpdated', this, this.onUserDataUpdated);
		this._super(...arguments);
	},

	model() {
		if(!window.twyrTenantId) {
			this.get('store').unloadAll('tenant-administration/tenant');
			this.get('store').unloadAll('tenant-administration/tenant-location');

			return;
		}

		const tenantData =  this.get('store').peekRecord('tenant-administration/tenant', window.twyrTenantId);
		if(tenantData) return tenantData;

		return this.get('store').findRecord('tenant-administration/tenant', window.twyrTenantId, {
			'include': 'location'
		});
	},

	redirect(model, transition) {
		if(transition.targetName === `${this.get('fullRouteName')}.index`)
			this.transitionTo(`${this.get('fullRouteName')}.feature-manager`);
	},

	onUserDataUpdated() {
		if(!window.twyrTenantId) {
			this.get('store').unloadAll('tenant-administration/tenant');
			this.get('store').unloadAll('tenant-administration/tenant-location');

			return;
		}

		const isActive = this.get('router').get('currentRouteName').includes(this.get('fullRouteName'));
		if(!isActive) return;

		this.get('refreshTenantModel').perform();
	},

	refreshTenantModel: task(function* () {
		let tenantData =  this.get('store').peekRecord('tenant-administration/tenant', window.twyrTenantId);
		if(!tenantData) {
			tenantData = yield this.get('store').findRecord('tenant-administration/tenant', window.twyrTenantId, {
				'include': 'location'
			});
		}

		this.get('controller').set('model', tenantData);
	}).keepLatest()
});
