/* eslint-disable require-yield */
/* eslint-disable no-console */

import Service from '@ember/service';
import Evented from '@ember/object/evented';

import { task } from 'ember-concurrency';
import axios from 'axios';

import App from './../app';

export default Service.extend(Evented, {
	'userData': null,

	'onInit': task(function* () {
		const fetchUserData = this.get('fetchUserData');
		yield fetchUserData.perform();

		App.on('userChanged', fetchUserData.perform);
	}).on('init'),

	'fetchUserData': task(function* () {
		yield axios.get('/session/user')
		.then((userData) => {
			this.set('userData', userData);
		})
		.catch((err) => {
			// TODO: Use the Beacon API to send all this back to the server;
			this.set('userData', null);
			if(window.developmentMode) console.error(`Error fetching current user data: `, err);
		});
	}).keepLatest(),

	'isLoggedIn': function() {
		return !!this.get('userData');
	},

	'hasPermission': function(permission) {
		return (this.get('userData') && this.get('userData.permissions').includes(permission));
	}
});
