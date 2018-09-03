/* eslint-disable require-yield */
/* eslint-disable no-console */

import Evented from '@ember/object/evented';
import Service from '@ember/service';

import { getOwner } from '@ember/application';
import { task } from 'ember-concurrency';
import axios from 'axios';

import App from './../app';

export default Service.extend(Evented, {
	'userData': null,

	'onInit': task(function* () {
		const fetchUserData = this.get('fetchUserData');
		yield fetchUserData.perform();

		App.on('userChanged', () => {
			fetchUserData.perform();
		});
	}).on('init'),

	'fetchUserData': task(function* () {
		this.trigger('userDataUpdating');

		const owner = getOwner(this);
		const router = owner.lookup('router:main');

		yield axios.get('/session/user')
		.then((userData) => {
			this.set('userData', userData);
			this.trigger('userDataUpdated');
		})
		.catch((err) => {
			// TODO: Use the Beacon API to send all this back to the server;
			this.set('userData', null);
			this.trigger('userDataUpdated');

			router.send('controller-action', 'display-status-message', {
				'type': 'error',
				'error': err
			});
		});
	}).keepLatest(),

	'isLoggedIn': function() {
		return !!this.get('userData');
	},

	'hasPermission': function(permission) {
		return (this.get('userData') && this.get('userData.permissions').includes(permission));
	}
});
