/* eslint-disable no-console */

import axios from 'axios';

import Evented from '@ember/object/evented';
import Service from '@ember/service';

import { inject } from '@ember/service';
import { task } from 'ember-concurrency';

export default Service.extend(Evented, {
	notification: inject('integrated-notification'),
	userData: null,

	onInit: task(function* () {
		const fetchUserData = this.get('fetchUserData');
		yield fetchUserData.perform();

		// eslint-disable-next-line no-undef
		TwyrApp.on('userChanged', this, this.onUserChanged);
	}).on('init').drop(),

	onUserChanged() {
		const fetchUserData = this.get('fetchUserData');
		fetchUserData.perform();
	},

	fetchUserData: task(function* () {
		this.trigger('userDataUpdating');

		try {
			const userData = yield axios.get('/session/user');

			this.set('userData', userData.data);
			this.trigger('userDataUpdated');
		}
		catch(err) {
			// TODO: Use the Beacon API to send all this back to the server;
			this.set('userData', null);
			this.trigger('userDataUpdated');

			this.get('notification').display({
				'type': 'error',
				'error': err
			});
		}
	}).keepLatest(),

	isLoggedIn() {
		return this.get('userData.loggedIn');
	},

	hasPermission(permission) {
		return ((this.get('userData.permissions') || []).includes(permission));
	}
});
