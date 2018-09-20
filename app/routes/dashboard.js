import BaseRoute from '../framework/base-route';

import { inject } from '@ember/service';
import { task } from 'ember-concurrency';

export default BaseRoute.extend({
	currentUser: inject('current-user'),

	init() {
		this._super(...arguments);
		this.get('currentUser').on('userDataUpdated', this, this.onUserDataUpdated);
	},

	destroy() {
		this.get('currentUser').off('userDataUpdated', this, this.onUserDataUpdated);
		this._super(...arguments);
	},

	model() {
		if(!window.twyrUserId) {
			this.get('store').unloadAll('dashboard/feature');
			return;
		}

		const featureData =  this.get('store').peekAll('dashboard/feature');
		if(featureData.get('length')) return featureData;

		return this.get('store').findAll('dashboard/feature');
	},

	onUserDataUpdated() {
		if(!window.twyrUserId) {
			this.get('store').unloadAll('dashboard/feature');
			return;
		}

		this.get('refreshDashboardFeatures').perform();
	},

	refreshDashboardFeatures: task(function* () {
		let featureData =  this.get('store').peekAll('dashboard/feature');
		if(!featureData.get('length')) featureData = yield this.get('store').findAll('dashboard/feature');

		this.get('controller').set('model', featureData);
	}).keepLatest()
});
