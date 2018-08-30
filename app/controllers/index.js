/* eslint-disable require-yield */
/* eslint-disable no-console */
/* eslint-disable ember/avoid-leaking-state-in-ember-objects */

import { inject } from '@ember/service';
import { task } from 'ember-concurrency';

import BaseController from '../framework/base-controller';

export default BaseController.extend({
	'realtimeData': inject('realtime-data'),

	'modalData': null,
	'showDialog': false,

	'onInit': task(function* () {
		const onDisplayStatusMessage = this.get('display-status-message');

		this.get('realtimeData').on('websocket-data::display-status-message', (data) => {
			onDisplayStatusMessage.perform(data);
		});

		this.get('realtimeData').on('websocket-close', () => {
			onDisplayStatusMessage.perform('Realtime Data Connectivity lost! Will attempt reconnection!!');
		});

		this.get('realtimeData').on('websocket-disconnection', () => {
			onDisplayStatusMessage.perform('Realtime Data Connectivity lost!');
		});
	}).on('init'),

	'display-status-message': task(function* (data) {
		if(data.type === 'danger') data.type = 'error';

		const options = Object.assign({}, { 'positionClass': 'toast-top-right' }, data.options);

		const toast = this.get('toast');
		if(data.type !== 'error') {
			toast[data.type ? data.type : 'info'](data.message || data, (data.title || (data.type ? data.type.capitalize() : '')), options);
			return;
		}

		if(typeof data.error === 'string') {
			toast.error(data.error.replace(/\\n/g, '\n').split('\n').splice(0, 2).join('\n'), 'Error', options);
			return;
		}

		if(data.error.responseText) {
			toast.error(data.error.responseText.replace(/\\n/g, '\n').split('\n').splice(0, 2).join('\n'), 'Error', options);
			return;
		}

		if(data.error.errors && data.error.errors.length) {
			data.error.errors.forEach((dataError) => {
				toast.error(dataError.detail.replace(/\\n/g, '\n').split('\n').splice(0, 2).join('\n'), (dataError.title || 'Error'), options);
			});

			return;
		}

		toast.error(data.error.message, 'Error', options);
	}).keepLatest(),

	'display-modal': function(data) {
		const defaultData = {
			'title': 'Twyr Modal',
			'content': `This is the default. Someone forgot to override it!`,

			'confirmButton': {
				'text': 'OK',
				'icon': 'check',

				'primary': true,
				'raised': true,

				'callback': null
			},

			'cancelButton': {
				'text': 'Cancel',
				'icon': 'cancel',

				'warn': true,
				'raised': true,

				'callback': null
			},

			'actions': {

			}
		};

		const modalData = Object.assign({}, defaultData, data);

		this.set('modalData', modalData);
		this.set('showDialog', true);
	},

	'closeDialog': function(proceed) {
		if(proceed && this.get('modalData.confirmButton.callback')) {
			this.get('modalData.confirmButton.callback')();
		}

		if(!proceed && this.get('modalData.cancelButton.callback')) {
			this.get('modalData.cancelButton.callback')();
		}

		this.set('showDialog', false);
		this.set('modalData', null);
	},

	'actions': {
		'controller-action': function(action, data) {
			if(this.get('showDialog') && this.get('modalData') && this.get('modalData.actions')) {
				const modalActions = this.get('modalData')['actions'][action];
				if(modalActions) {
					modalActions(data);
					return;
				}
			}

			if(this[action]) {
				this[action](data);
				return;
			}

			console.log(`TODO: Handle ${action} action with data: `, data);
		}
	}
});
