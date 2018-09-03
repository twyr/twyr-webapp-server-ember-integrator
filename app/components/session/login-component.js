import axios from 'axios';

import BaseComponent from '../../framework/base-component';
import { task } from 'ember-concurrency';

export default BaseComponent.extend({
	permissions: null,
	displayForm: 'loginForm',

	username: '',
	password: '',
	confirmPassword: '',
	firstName: '',
	lastName: '',
	mobileNumber: '',


	onInit: task(function* () {
		yield this.set('permissions', ['registered']);
	}).on('init').keepLatest(),

	doLogin: task(function* () {
		const notification = this.get('notification');

		notification.display({
			'type': 'info',
			'message': 'Logging you in...'
		});

		try {
			const data = yield axios.post('/session/login', {
				'dataType': 'json',
				'data': {
					'username': this.get('username'),
					'password': this.get('password')
				}
			});

			notification.display({
				'type': data.status ? 'success' : 'error',
				'message': data.responseText
			});

			if(data.status) window.location.href = '/';
		}
		catch(err) {
			notification.display({
				'type': 'error',
				'error': err
			});
		}
	}).drop(),

	resetPassword: task(function* () {
		const notification = this.get('notification');

		notification.display({
			'type': 'info',
			'message': 'Resetting your password...'
		});

		try {
			let data = yield axios.post('/session/resetPassword', {
				'dataType': 'json',
				'data': {
					'username': this.get('username')
				}
			});

			if(data.status) {
				notification.display({
					'type': 'success',
					'message': data.responseText
				});

				return;
			}

			throw new Error(data.responseText);
		}
		catch(err) {
			notification.display({
				'type': 'error',
				'error': err
			});
		}
	}).drop(),

	registerAccount: task(function* () {
		const notification = this.get('notification');

		if(this.get('password') !== this.get('confirmPassword')) {
			notification.display({
				'type': 'error',
				'error': 'The passwords do not match'
			});

			return;
		}

		notification.display({
			'type': 'info',
			'message': 'Registering your account...'
		});

		try {
			let data = yield axios.post('/session/registerAccount', {
				'dataType': 'json',
				'data': {
					'firstname': this.get('firstName'),
					'lastname': this.get('lastName'),

					'username': this.get('username'),
					'mobileNumber': this.get('mobileNumber'),

					'password': this.get('password')
				}
			});

			notification.display({
				'type': data.status ? 'success' : 'warning',
				'message': data.responseText
			});
		}
		catch(err) {
			notification.display({
				'type': 'error',
				'error': err
			});
		}
	}).drop(),

	setDisplayForm: function(formName) {
		this.set('displayForm', formName);
	}
});
