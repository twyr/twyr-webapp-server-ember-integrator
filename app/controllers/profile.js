/* eslint-disable require-yield */

import BaseController from '../framework/base-controller';
import ExponentialBackoffPolicy from 'ember-concurrency-retryable/policies/exponential-backoff';

import { task, timeout } from 'ember-concurrency';

const backoffPolicy = new ExponentialBackoffPolicy({
	'multiplier': 1.5,
	'minDelay': 30,
	'maxDelay': 400
});

export default BaseController.extend({
	selectedAccordionItem: '1',

	currentPassword: '',
	newPassword1: '',
	newPassword2: '',

	save: task(function* () {
		try {
			yield this.get('model').save();
			this.get('notification').display({
				'type': 'success',
				'message': 'Profile saved successfully'
			});

			window.TwyrApp.trigger('userChanged');
		}
		catch(err) {
			this.get('notification').display({
				'type': 'error',
				'error': err
			});
		}
	}).drop().retryable(backoffPolicy),

	cancel: task(function* () {
		yield this.get('model').rollback();
	}).drop(),

	changePassword: task(function* () {
		try {
			const changePasswordResult = yield this.get('ajax').post('/profile/changePassword', {
				'dataType': 'json',
				'data': {
					'currentPassword': this.get('currentPassword'),
					'newPassword1': this.get('newPassword1'),
					'newPassword2': this.get('newPassword2')
				}
			});

			this.get('notification').display({
				'type': (changePasswordResult.status < 400) ? 'success' : 'error',
				'message': changePasswordResult.message,
				'error': changePasswordResult.message
			});
		}
		catch(err) {
			this.get('notification').display({
				'type': 'error',
				'error': err
			});
		}
		finally {
			this.get('cancelChangePassword').perform();
		}
	}).drop().retryable(backoffPolicy),

	cancelChangePassword: task(function* () {
		this.set('currentPassword', '');
		this.set('newPassword1', '');
		this.set('newPassword2', '');
	}).drop(),

	deleteAccount: task(function* () {
		this.send('controller-action', 'displayModal', {
			'title': 'Delete Account',
			'content': `${this.get('model.fullName')}, are you sure you want to delete your account?`,
			'dialogClass': 'flex-50',

			'confirmButton': {
				'text': 'Delete',
				'icon': 'check',

				'warn': true,
				'raised': true,

				'callback': () => { this.get('_confirmedDeleteAccount').perform(); }
			},

			'cancelButton': {
				'text': 'Cancel',
				'icon': 'cancel',

				'primary': true,
				'raised': true,

				'callback': null
			}
		});
	}).drop(),

	onChangeAccordionItem: task(function* (newSelectedItem) {
		this.set('selectedAccordionItem', newSelectedItem);
		yield timeout(10);

		if(!newSelectedItem) this.set('selectedAccordionItem', '1');
	}).keepLatest(),

	_confirmedDeleteAccount: task(function* () {
		try {
			yield this.get('model').destroyRecord();
			this.get('notification').display({
				'type': 'success',
				'message': 'Account deleted successfully'
			});

			window.TwyrApp.trigger('userChanged');
		}
		catch(err) {
			this.get('notification').display({
				'type': 'error',
				'error': err
			});
		}
	}).drop().retryable(backoffPolicy)
});
