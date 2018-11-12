import BaseComponent from './../../framework/base-component';
import ExponentialBackoffPolicy from 'ember-concurrency-retryable/policies/exponential-backoff';

import { task, timeout } from 'ember-concurrency';

const backoffPolicy = new ExponentialBackoffPolicy({
	'multiplier': 1.5,
	'minDelay': 30,
	'maxDelay': 400
});

export default BaseComponent.extend({
	selectedAccordionItem: '1',
	_profileImageElem: null,

	currentPassword: '',
	newPassword1: '',
	newPassword2: '',

	init() {
		this._super(...arguments);
		this.set('permissions', ['registered']);
	},

	'onDidInsertElement': task(function* () {
		try {
			this.set('_profileImageElem', this.$('div#profile-basic-information-image'));

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

			yield profileImageElem.croppie('bind', {
				'url': '/profile/get-image?_random=' + window.moment().valueOf(),
				'orientation': 1
			});

			// Add an event handler for catching dropped images
			document
				.getElementById('profile-basic-information-image')
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
			.getElementById('profile-basic-information-image')
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

			yield this.get('ajax').post('/profile/upload-image', {
				'dataType': 'json',
				'data': {
					'image': imageData,
					'metadata': metadata
				}
			});


			window.TwyrApp.trigger('userChanged');

			yield profileImageElem.croppie('bind', {
				'url': '/profile/get-image?_random=' + window.moment().valueOf(),
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
	}).keepLatest().retryable(backoffPolicy),

	'save': task(function* () {
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

	'cancel': task(function* () {
		yield this.get('model').rollback();
	}).drop(),

	'changePassword': task(function* () {
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

	'cancelChangePassword': task(function* () {
		yield this.set('currentPassword', '');
		this.set('newPassword1', '');
		this.set('newPassword2', '');
	}).drop(),

	'deleteAccount': task(function* () {
		yield this.invokeAction('controller-action', 'displayModal', {
			'title': 'Delete Account',
			'content': `<strong>${this.get('model.fullName')}</strong>, are you sure you want to delete your account?`,

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

	'onChangeAccordionItem': task(function* (newSelectedItem) {
		this.set('selectedAccordionItem', newSelectedItem);
		yield timeout(10);

		if(!newSelectedItem) this.set('selectedAccordionItem', '1');
	}).keepLatest(),

	'_confirmedDeleteAccount': task(function* () {
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
