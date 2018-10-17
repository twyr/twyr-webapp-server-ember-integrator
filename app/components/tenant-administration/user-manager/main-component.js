import BaseComponent from '../../../framework/base-component';
import ExponentialBackoffPolicy from 'ember-concurrency-retryable/policies/exponential-backoff';

import { observer } from '@ember/object';
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

	changeAccountStatus: task(function* (tenantUser, newStatus) {
		try {
			const oldStatus = tenantUser.get('accessStatus');

			tenantUser.set('operationIsRunning', true);
			tenantUser.set('accessStatus', newStatus);

			yield tenantUser.save();

			const remainingUsersWithOldStatus = this.get('model').filterBy('accessStatus', oldStatus).get('length');
			if(remainingUsersWithOldStatus) return;

			yield this.get('onChangeAccordionItem').perform(undefined);
		}
		catch(err) {
			tenantUser.rollback();
			throw err;
		}
		finally {
			tenantUser.set('operationIsRunning', false);
		}
	}).enqueue().retryable(backoffPolicy),

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

	onChangeAccordionItem: task(function* (newSelectedItem) {
		this.set('selectedAccordionItem', newSelectedItem);
		yield timeout(10);

		if(!newSelectedItem) this.set('selectedAccordionItem', '1');
	}).keepLatest()
});
