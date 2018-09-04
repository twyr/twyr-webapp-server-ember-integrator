/* eslint-disable require-yield */
/* eslint-disable no-console */
/* eslint-disable ember/avoid-leaking-state-in-ember-objects */

import { inject } from '@ember/service';
import BaseController from '../framework/base-controller';

export default BaseController.extend({
	notification: inject('integrated-notification'),
	realtimeData: inject('realtime-data'),

	modalData: null,
	showDialog: false,

	init() {
		this._super(...arguments);

		const notification = this.get('notification');

		this.get('realtimeData').on('websocket-data::display-status-message', (data) => {
			notification.display(data);
		});

		this.get('realtimeData').on('websocket-close', () => {
			notification.display('Realtime Data Connectivity lost! Will attempt reconnection!!');
		});

		this.get('realtimeData').on('websocket-disconnection', () => {
			notification.display('Realtime Data Connectivity lost!');
		});

		// eslint-disable-next-line no-undef
		TwyrApp.on('showModal', this, this.displayModal);
	},

	displayModal: function(data) {
		if(this.get('showDialog')) {
			this.get('notification').display({
				'type': 'error',
				'error': new Error('Multiple Modal Dialogs cannot be displayed simultaneously')
			});

			return;
		}

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

	closeDialog: function(proceed) {
		if(proceed && this.get('modalData.confirmButton.callback')) {
			this.get('modalData.confirmButton.callback')();
		}

		if(!proceed && this.get('modalData.cancelButton.callback')) {
			this.get('modalData.cancelButton.callback')();
		}

		this.set('showDialog', false);
		this.set('modalData', null);
	}
});
