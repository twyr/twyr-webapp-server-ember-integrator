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
		if(!window.twyrUserId) return;

		const featureData =  this.store.peekAll('dashboard/feature');
		if(featureData.get('length')) return featureData;

		return this.store.findAll('dashboard/feature');
	},

	onUserDataUpdated() {
		if(!window.twyrUserId) return;
		this.get('refreshDashboardFeatures').perform();
	},

	refreshDashboardFeatures: task(function* () {
		let featureData =  this.store.peekAll('dashboard/feature');
		if(!featureData.get('length')) featureData = yield this.store.findAll('dashboard/feature');

		this.get('controller').set('model', featureData);
	}).keepLatest()
});
