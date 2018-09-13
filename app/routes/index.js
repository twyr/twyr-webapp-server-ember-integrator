import BaseRoute from '../framework/base-route';
import { inject } from '@ember/service';

export default BaseRoute.extend({
	currentUser: inject('current-user'),
	router: inject('router'),

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
		const isIndexActive = this.get('router').isActive('index');
		if(!isIndexActive) return;

		const userData = this.get('currentUser').getUser();
		if(!userData) return;

		if((userData.defaultApplication === '') || (userData.defaultApplication === 'index'))
			return;

		this.transitionTo(userData.defaultApplication);
	}
});
