import BaseRoute from '../framework/base-route';

import { runTask } from 'ember-lifeline';
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
		if(transition.targetName !== `${this.get('fullRouteName')}.index`)
			return;

		runTask(this, this._redirectToSubRoute, 500);
	},

	onUserDataUpdated() {
		if(!window.twyrTenantId) {
			this.get('store').unloadAll('tenant-administration/tenant');
			this.get('store').unloadAll('tenant-administration/tenant-location');
		}

		const isActive = this.get('router').get('currentRouteName').includes(this.get('fullRouteName'));
		if(!isActive) return;

		if(!window.twyrUserId) {
			this.transitionTo('index');
			return;
		}

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
	}).keepLatest(),

	_redirectToSubRoute() {
		if(!this.get('controller.hasSubModulePermissions')) {
			return;
		}

		if(this.get('controller.canViewFeatureAdministrator')) {
			this.transitionTo(`${this.get('fullRouteName')}.feature-manager`);
			return;
		}

		if(this.get('controller.canViewGroupAdministrator')) {
			this.transitionTo(`${this.get('fullRouteName')}.group-manager`);
			return;
		}

		if(this.get('controller.canViewUserAdministrator')) {
			this.transitionTo(`${this.get('fullRouteName')}.user-manager`);
			return;
		}
	}
});
