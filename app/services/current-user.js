/* eslint-disable no-console */

import axios from 'axios';

import Evented from '@ember/object/evented';
import Service from '@ember/service';

import { getOwner } from '@ember/application';
import { inject } from '@ember/service';
import { task } from 'ember-concurrency';

import App from './../app';

export default Service.extend(Evented, {
	notification: inject('integrated-notification'),
	userData: null,

	onInit: task(function* () {
		const fetchUserData = this.get('fetchUserData');
		yield fetchUserData.perform();

		// App.on('userChanged', () => {
		// 	fetchUserData.perform();
		// });
	}).on('init').drop(),

	fetchUserData: task(function* () {
		this.trigger('userDataUpdating');
		this.trigger('userDataUpdated');

		// yield axios.get('/session/user')
		// .then((userData) => {
		// 	this.set('userData', userData);
		// 	this.trigger('userDataUpdated');
		// })
		// .catch((err) => {
		// 	// TODO: Use the Beacon API to send all this back to the server;
		// 	this.set('userData', null);
		// 	this.trigger('userDataUpdated');

		// 	this.get('notification').display({
		// 		'type': 'error',
		// 		'error': err
		// 	});
		// });
	}).keepLatest(),

	isLoggedIn() {
		return this.get('userData.loggedIn');
	},

	hasPermission(permission) {
		return ((this.get('userData.permissions') || []).includes(permission));
	}
});
