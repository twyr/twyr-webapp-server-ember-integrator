import BaseComponent from '../../../framework/base-component';
import ExponentialBackoffPolicy from 'ember-concurrency-retryable/policies/exponential-backoff';

import { task, timeout } from 'ember-concurrency';

const backoffPolicy = new ExponentialBackoffPolicy({
	'multiplier': 1.5,
	'minDelay': 30,
	'maxDelay': 400
});

export default BaseComponent.extend({
	init() {
		this._super(...arguments);
		this.set('permissions', ['registered']);
	},

	'onDidInsertElement': task(function* () {
		try {
			this.set('_profileImageElem', this.$('div#tenant-administration-user-manager-edit-account-image'));

			const profileImageElem = this.get('_profileImageElem'),
				croppieDimensions = ((profileImageElem.width() < profileImageElem.height()) ? profileImageElem.width() : profileImageElem.height());

			profileImageElem.croppie({
				'boundary': {
					'width': croppieDimensions,
					'height': croppieDimensions
				},

				'viewport': {
					'width': croppieDimensions,
					'height': croppieDimensions,
					'type': 'circle'
				},

				'showZoomer': true,
				'useCanvas': true,
				'update': this.get('_processCroppieUpdate').bind(this)
			});

			yield timeout(500);
			yield profileImageElem.croppie('bind', {
				'url': `/tenant-administration/user-manager/get-image/${this.get('state.tenantUser.id')}?_random=${window.moment().valueOf()}`,
				'orientation': 1
			});

			// Add an event handler for catching dropped images
			document
				.getElementById('tenant-administration-user-manager-edit-account-image')
				.addEventListener('drop', this._processDroppedImage.bind(this));
		}
		catch(err) {
			this.get('notification').display({
				'type': 'error',
				'error': err
			});
		}
		finally {
			this.set('_enableCroppieUpdates', true);
		}
	}).drop().on('didInsertElement'),

	'onWillDestroyElement': task(function* () {
		document
			.getElementById('tenant-administration-user-manager-edit-account-image')
			.removeEventListener('drop', this._processDroppedImage.bind(this));

		yield this.get('_profileImageElem').croppie('destroy');
	}).drop().on('willDestroyElement'),

	_processDroppedImage(event) {
		event.stopPropagation();
		event.preventDefault();

		const imageFile = event.dataTransfer.files[0];
		if(!imageFile.type.match('image.*'))
			return;

		const imageReader = new FileReader();
		const profileImageElem = this.get('_profileImageElem');

		imageReader.onload = ((imageData) => {
			profileImageElem.croppie('bind', {
				'url': imageData.target.result,
				'orientation': 1
			});
		});

		imageReader.readAsDataURL(imageFile);
	},

	_processCroppieUpdate() {
		if(!this.get('_enableCroppieUpdates'))
			return;

		if(this.get('_profileImageUploadTimeout')) {
			this.cancelTask(this.get('_profileImageUploadTimeout'));
			this.set('_profileImageUploadTimeout', null);
		}

		this.set('_profileImageUploadTimeout', this.runTask(() => {
			this.get('_uploadProfileImage').perform();
		}, 10000));
	},

	'_uploadProfileImage': task(function* () {
		try {
			this.set('_enableCroppieUpdates', false);

			const profileImageElem = this.get('_profileImageElem');

			const metadata = profileImageElem.croppie('get');
			const imageData = yield profileImageElem.croppie('result', {
				'type': 'base64',
				'circle': true
			});

			yield this.get('ajax').post(`/tenant-administration/user-manager/upload-image/${this.get('state.tenantUser.id')}`, {
				'dataType': 'json',
				'data': {
					'image': imageData,
					'metadata': metadata
				}
			});

			window.TwyrApp.trigger('userChanged');

			yield this.get('state.model').reload();
			yield profileImageElem.croppie('bind', {
				'url': `/tenant-administration/user-manager/get-image/${this.get('state.tenantUser.id')}?_random=${window.moment().valueOf()}`,
				'orientation': 1
			});
		}
		catch(err){
			this.get('notification').display({
				'type': 'error',
				'error': err
			});
		}
		finally {
			this.set('_enableCroppieUpdates', true);
			this.set('_profileImageUploadTimeout', null);
		}
	}).keepLatest().retryable(backoffPolicy)
});
