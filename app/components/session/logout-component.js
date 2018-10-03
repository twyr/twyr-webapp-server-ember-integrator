import BaseComponent from '../../framework/base-component';
import { inject } from '@ember/service';
import { task } from 'ember-concurrency';

export default BaseComponent.extend({
	router: inject('router'),

	init() {
		this._super(...arguments);
		this.set('permissions', ['registered']);
	},

	doLogout: task(function* () {
		const notification = this.get('notification');

		notification.display({
			'type': 'info',
			'message': 'Logging you out...'
		});

		try {
			const logoutResult = yield this.get('ajax').request('/session/logout', { 'method': 'GET' });
			notification.display({
				'type': (logoutResult.status < 400) ? 'success' : 'error',
				'message': logoutResult.info.message,
				'error': logoutResult.info.message
			});

			this.get('currentUser').one('userDataUpdated', () => {
				this.get('router').transitionTo('index');
			});

			window.TwyrApp.trigger('userChanged');
		}
		catch(err) {
			notification.display({
				'type': 'error',
				'error': err
			});
		}
	}).drop(),

	click() {
		this.get('doLogout').perform();
	}
});
