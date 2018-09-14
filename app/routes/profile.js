import BaseRoute from '../framework/base-route';

export default BaseRoute.extend({
	model() {
		if(!window.twyrUserId) return;

		const profileData =  this.store.peekRecord('profile/user', window.twyrUserId, {
			'include': 'contacts'
		});

		if(profileData) return profileData;

		return this.store.findRecord('profile/user', window.twyrUserId, {
			'include': 'contacts'
		});
	}
});
