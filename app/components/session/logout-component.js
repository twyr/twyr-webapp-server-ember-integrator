import BaseComponent from '../../framework/base-component';
import { task } from 'ember-concurrency';

export default BaseComponent.extend({
	permissions: null,

	onInit: task(function* () {
		yield this.set('permissions', ['registered']);
	}).on('init').drop(),

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
				'message': logoutResult.info.message
			});

			// eslint-disable-next-line no-undef
			TwyrApp.trigger('userChanged');
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
