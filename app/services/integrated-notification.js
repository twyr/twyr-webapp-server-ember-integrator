import Service from '@ember/service';
import Notify from 'notifyjs';

import { inject } from '@ember/service';

export default Service.extend({
	toast: inject('toast'),

	notifyEnabled: false,

	init() {
		this._super(...arguments);

		if(!Notify.needsPermission) {
			this.set('notifyEnabled', true);
			return;
		}

		if(!Notify.isSupported()) {
			this.set('notifyEnabled', false);
			return;
		}

		const self = this;
		Notify.requestPermission(function() {
			self.set('notifyEnabled', true);
			return;
		}, function() {
			self.set('notifyEnabled', false);
			return;
		});
	},

	display(data) {
		if(this.get('notifyEnabled') && (((data.type || 'info') === 'success') || ((data.type || 'info') === 'error'))) {
			const thisNotification = new Notify((data.title || (data.type ? data.type.capitalize() : '')), {
				'body': (data.type !== 'error') ? (data.message || data) : (data.error.responseText || data.error.message || data.error),
				'closeOnClick': true,
				'timeout': 4000
			});

			thisNotification.show();
			return;
		}

		const toast = this.get('toast');
		toast.clear();

		const options = Object.assign({}, {
			'positionClass': 'toast-bottom-right',
			'preventDuplicates': true
		}, data.options);

		if(data.type === 'danger')
			data.type = 'error';

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

		if(data.error.payload && data.error.payload.errors && data.error.payload.errors.length) {
			data.error.payload.errors.forEach((dataError, idx) => {
				if(!idx) return;
				toast.error(dataError.detail, 'Error', options);
			});

			return;
		}

		toast.error(data.error.message, 'Error', options);
	}
});
