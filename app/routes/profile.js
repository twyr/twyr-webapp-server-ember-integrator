import BaseRoute from '../framework/base-route';
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
		if(!window.twyrUserId) {
			this.get('store').unloadAll('profile/user');
			this.get('store').unloadAll('profile/user-contact');

			return;
		}

		const profileData =  this.get('store').peekRecord('profile/user', window.twyrUserId);
		if(profileData) return profileData;

		return this.get('store').findRecord('profile/user', window.twyrUserId, {
			'include': 'contacts'
		});
	},

	onUserDataUpdated() {
		if(!window.twyrUserId) {
			this.get('store').unloadAll('profile/user');
			this.get('store').unloadAll('profile/user-contact');
		}

		const isActive = this.get('router').get('currentRouteName').includes(this.get('fullRouteName'));
		if(!isActive) return;

		if(!window.twyrUserId) {
			this.transitionTo('index');
			return;
		}

		this.get('refreshProfileModel').perform();
	},

	refreshProfileModel: task(function* () {
		let profileData =  this.get('store').peekRecord('profile/user', window.twyrUserId);
		if(!profileData) {
			profileData = yield this.get('store').findRecord('profile/user', window.twyrUserId, {
				'include': 'contacts'
			});
		}

		this.get('controller').set('model', profileData);
	}).keepLatest()
});
