import BaseController from '../framework/base-controller';
import env from 'twyr-webapp-server/config/environment';

import { inject } from '@ember/service';

export default BaseController.extend({
	'notification': inject('integrated-notification'),
	'realtimeData': inject('realtime-data'),

	'modalData': null,
	'showDialog': false,

	'mainTitle': '',
	'displayCurrentYear': false,

	'startYear': env.twyr.startYear,
	'currentYear': env.twyr.startYear,

	init() {
		this._super(...arguments);
		this.set('mainTitle', document.title);

		const currentYear = new Date().getFullYear();
		this.set('currentYear', currentYear);
		this.set('displayCurrentYear', (currentYear > this.get('startYear')));

		this.get('realtimeData').on('websocket-data::display-status-message', this, this.onDisplayWebsocketStatusMessage);
		this.get('realtimeData').on('websocket-close', this, this.onWebsocketClose);
		this.get('realtimeData').on('websocket-disconnection', this, this.onWebsocketDisconnect);
	},

	destroy() {
		this.get('realtimeData').off('websocket-disconnection', this, this.onWebsocketDisconnect);
		this.get('realtimeData').off('websocket-close', this, this.onWebsocketClose);
		this.get('realtimeData').off('websocket-data::display-status-message', this, this.onDisplayWebsocketStatusMessage);

		this._super(...arguments);
	},

	onDisplayWebsocketStatusMessage(data) {
		const notification = this.get('notification');
		notification.display(data);
	},

	onWebsocketClose() {
		const notification = this.get('notification');
		notification.display('Realtime Data Connectivity lost! Will attempt reconnection!!');
	},

	onWebsocketDisconnect() {
		const notification = this.get('notification');
		notification.display('Realtime Data Connectivity lost!');
	},

	displayModal(data) {
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
			'dialogClass': '',

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

	closeDialog(proceed) {
		if(proceed && this.get('modalData.confirmButton.callback')) {
			this.get('modalData.confirmButton.callback')();
		}

		if(!proceed && this.get('modalData.cancelButton.callback')) {
			this.get('modalData.cancelButton.callback')();
		}

		this.set('showDialog', false);
		this.set('modalData', null);
	},

	actions: {
		'controller-action': function(action, data) {
			if(this.get('showDialog') && this.get('modalData') && this.get('modalData.actions')) {
				const modalActions = this.get('modalData')['actions'][action];
				if(modalActions) {
					modalActions(data);
					return;
				}
			}

			if(this[action] && (typeof this[action] === 'function')) {
				this[action](data);
				return;
			}

			this.get('notification').display(`TODO: Handle ${action} action with data: `, data);
		}
	}
});
