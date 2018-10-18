/* eslint-disable ember/no-on-calls-in-components */

import BaseComponent from '../../../framework/base-component';
import ExponentialBackoffPolicy from 'ember-concurrency-retryable/policies/exponential-backoff';

import { observer } from '@ember/object';
import { on } from '@ember/object/evented';
import { task, timeout } from 'ember-concurrency';

const backoffPolicy = new ExponentialBackoffPolicy({
	'multiplier': 1.5,
	'minDelay': 30,
	'maxDelay': 400
});

export default BaseComponent.extend({
	'selectedAccordionItem': '1',
	'editable': false,

	init() {
		this._super(...arguments);
		this.set('permissions', ['user-manager-read']);
	},

	onHasPermissionChange: observer('hasPermission', function() {
		const updatePerm = this.get('currentUser').hasPermission('user-manager-update');
		this.set('editable', updatePerm);
	}),

	resetPassword: task(function* (tenantUser) {
		try {
			const self = this;
			const user = yield tenantUser.get('user');

			const componentState = {
				'tenantUser': tenantUser,
				'model': user,
				'generateRandomPassword': false,
				'newPassword': ''
			};

			const modalData = {
				'title': 'Reset Password',

				'componentName': 'tenant-administration/user-manager/reset-password',
				'componentState': componentState,

				'confirmButton': {
					'text': 'Change',
					'icon': 'check',

					'primary': true,
					'raised': true,

					'callback': () => {
						self.get('doResetPassword').perform(componentState);
					}
				},

				'cancelButton': {
					'text': 'Cancel',
					'icon': 'cancel',

					'warn': true,
					'raised': true
				}
			};

			yield this.invokeAction('controller-action', 'displayModal', modalData);
		}
		catch(err) {
			this.get('notification').display({
				'type': 'error',
				'error': err
			});
		}
	}).drop(),

	doResetPassword: task(function* (componentState) {
		try {
			componentState.tenantUser.set('operationIsRunning', true);
			yield this.get('ajax').post('/tenant-administration/user-manager/resetPassword', {
				'dataType': 'json',
				'data': {
					'user': componentState.model.get('id'),
					'password': componentState.newPassword,
					'generate': componentState.generateRandomPassword
				}
			});
		}
		catch(err) {
			throw err;
		}
		finally {
			componentState.tenantUser.set('operationIsRunning', false);
		}
	}).enqueue().retryable(backoffPolicy),

	editAccount: task(function* (tenantUser) {
		try {
			const self = this;
			const user = yield tenantUser.get('user');

			const modalData = {
				'title': 'Edit User Account',
				'dialogClass': 'flex-100  flex-gt-md-75 flex-gt-lg-50',

				'componentName': 'tenant-administration/user-manager/edit-account',
				'componentState': {
					'model': user
				},

				'confirmButton': {
					'text': 'Save',
					'icon': 'check',

					'primary': true,
					'raised': true,

					'callback': () => {
						self.get('doUpdateAccount').perform(user);
					}
				},

				'cancelButton': {
					'text': 'Cancel',
					'icon': 'cancel',

					'warn': true,
					'raised': true,

					'callback': () => {
						user.rollback();
					}
				}
			};

			yield this.invokeAction('controller-action', 'displayModal', modalData);
		}
		catch(err) {
			this.get('notification').display({
				'type': 'error',
				'error': err
			});
		}
	}).drop(),

	doUpdateAccount: task(function* (user) {
		yield user.save();
	}).enqueue().evented().retryable(backoffPolicy),

	doUpdateAccountSucceeded: on('doUpdateAccount:succeeded', function(taskInstance) {
		const user = taskInstance.args[0];
		const loggedInUser = this.get('currentUser').getUser();

		if(loggedInUser['user_id'] !== user.get('id'))
			return;

		window.TwyrApp.trigger('userChanged');
	}),

	doUpdateAccountErrored: on('doUpdateAccount:errored', function(taskInstance, err) {
		const user = taskInstance.args[0];
		user.rollback();

		this.get('notification').display({
			'type': 'error',
			'error': err
		});
	}),

	changeAccountStatus: task(function* (tenantUser, newStatus) {
		const oldStatus = tenantUser.get('accessStatus');

		tenantUser.set('operationIsRunning', true);
		tenantUser.set('accessStatus', newStatus);

		yield tenantUser.save();

		const remainingUsersWithOldStatus = this.get('model').filterBy('accessStatus', oldStatus).get('length');
		if(remainingUsersWithOldStatus) return;

		yield this.get('onChangeAccordionItem').perform(undefined);
	}).enqueue().evented().retryable(backoffPolicy),

	changeAccountStatusErrored: on('changeAccountStatus:erored', function(taskInstance, err) {
		const tenantUser = taskInstance.args[0];

		tenantUser.rollback();
		tenantUser.set('operationIsRunning', false);

		this.get('notification').display({
			'type': 'error',
			'error': err
		});
	}),

	onChangeAccordionItem: task(function* (newSelectedItem) {
		this.set('selectedAccordionItem', newSelectedItem);
		yield timeout(10);

		if(!newSelectedItem) this.set('selectedAccordionItem', '1');
	}).keepLatest()
});
