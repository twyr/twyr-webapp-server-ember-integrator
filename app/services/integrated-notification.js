import Service from '@ember/service';
import { inject } from '@ember/service';

export default Service.extend({
	toast: inject('toast'),

	display(data) {
		const toast = this.get('toast');
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

		if(data.error.errors && data.error.errors.length) {
			data.error.errors.forEach((dataError) => {
				toast.error(dataError.detail.replace(/\\n/g, '\n').split('\n').splice(0, 2).join('\n'), (dataError.title || 'Error'), options);
			});

			return;
		}

		toast.error(data.error.message, 'Error', options);
	}
});
