import BaseRoute from '../framework/base-route';

export default BaseRoute.extend({
	init() {
		this._super(...arguments);
		this.get('currentUser').on('userDataUpdated', this, this.onUserDataUpdated);
	},

	destroy() {
		this.get('currentUser').off('userDataUpdated', this, this.onUserDataUpdated);
		this._super(...arguments);
	},

	redirect() {
		const userData = this.get('currentUser').getUser();
		if(!userData) return;

		if((userData.defaultApplication === '') || (userData.defaultApplication === 'index'))
			return;

		this.transitionTo(userData.defaultApplication);
	},

	onUserDataUpdated() {
		const userData = this.get('currentUser').getUser();
		if(!userData) return;

		const isActive = this.get('router').isActive(this.get('fullRouteName'));
		if(!isActive) return;

		if((userData.defaultApplication === '') || (userData.defaultApplication === this.get('fullRouteName')))
			return;

		this.transitionTo(userData.defaultApplication);
	}
});
