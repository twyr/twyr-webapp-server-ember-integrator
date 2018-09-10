/* eslint-disable ember/avoid-leaking-state-in-ember-objects */

import axios from 'axios';

import BaseComponent from '../../framework/base-component';

import computedStyle from 'ember-computed-style';
import { computed } from '@ember/object';
import { task } from 'ember-concurrency';

export default BaseComponent.extend({
	attributeBindings: ['style'],
	style: computedStyle('minWidth'),

	permissions: null,
	displayForm: 'loginForm',

	username: '',
	password: '',
	confirmPassword: '',
	firstName: '',
	lastName: '',
	mobileNumber: '',

	minWidth: computed('hasPermission', function() {
		return { 'min-width': (this.get('hasPermission') ? '0rem' : '20rem') };
	}),

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
				'username': this.get('username'),
				'password': this.get('password')
			});

			const loginResult = data.data;
			notification.display({
				'type': (loginResult.status < 400) ? 'success' : 'error',
				'message': loginResult.info.message
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

	resetPassword: task(function* () {
		const notification = this.get('notification');

		notification.display({
			'type': 'info',
			'message': 'Resetting your password...'
		});

		try {
			const data = yield axios.post('/session/reset-password', {
				'dataType': 'json',
				'username': this.get('username')
			});

			const resetPassResult = data.data;
			if(data.status < 400) {
				notification.display({
					'type': (resetPassResult.status < 400) ? 'success' : 'error',
					'message': resetPassResult.message
				});

				return;
			}

			throw new Error(data.message);
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
			const data = yield axios.post('/session/register-account', {
				'dataType': 'json',
				'firstname': this.get('firstName'),
				'lastname': this.get('lastName'),

				'username': this.get('username'),
				'mobileNumber': this.get('mobileNumber'),

				'password': this.get('password')
			});

			const registerResult = data.data;
			notification.display({
				'type': (registerResult.status < 400) ? 'success' : 'error',
				'message': registerResult.message
			});
		}
		catch(err) {
			notification.display({
				'type': 'error',
				'error': err
			});
		}
	}).drop(),

	setDisplayForm(formName) {
		this.set('displayForm', formName);
	}
});
