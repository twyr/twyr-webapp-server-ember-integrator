import BaseComponent from '../../framework/base-component';
import ExponentialBackoffPolicy from 'ember-concurrency-retryable/policies/exponential-backoff';

import { capitalize } from '@ember/string';
import { task } from 'ember-concurrency';

const backoffPolicy = new ExponentialBackoffPolicy({
	'multiplier': 1.5,
	'minDelay': 30,
	'maxDelay': 400
});

export default BaseComponent.extend({
	'contactTypes': null,

	init() {
		this._super(...arguments);
		this.set('permissions', ['registered']);
	},

	onInit: task(function* () {
		try {
			const contactTypes = yield this.get('ajax').request('/masterdata/contactTypes', { 'method': 'GET' });
			this.set('contactTypes', contactTypes);
		}
		catch(err) {
			this.get('notification').display({
				'type': 'error',
				'error': err
			});
		}
	}).on('init').drop().retryable(backoffPolicy),

	addContact: task(function* () {
		try {
			const store = this.get('store');
			const newContact = store.createRecord('profile/user-contact', {
				'user': this.get('model')
			});

			const contacts = yield this.get('model.contacts');
			contacts.pushObject(newContact);
		}
		catch(err) {
			this.get('notification').display({
				'type': 'error',
				'error': err
			});
		}
	}).drop(),

	saveContact: task(function* (contact) {
		try {
			yield contact.save();
			this.get('notification').display({
				'type': 'success',
				'message': `${capitalize(contact.get('type'))} contact ${contact.get('contact')} saved`
			});
		}
		catch(err) {
			this.get('notification').display({
				'type': 'error',
				'error': err
			});
		}
	}).enqueue().retryable(backoffPolicy),

	deleteContact: task(function* (contact) {
		if(contact.get('isNew')) {
			const contacts = yield this.get('model.contacts');
			contacts.removeObject(contact);

			yield contact.destroyRecord();
			return;
		}

		const modalData = {
			'title': 'Delete Contact',
			'content': `Are you sure you want to delete the <strong>${contact.get('contact')}</strong> contact?`,

			'confirmButton': {
				'text': 'Delete',
				'icon': 'delete',

				'warn': true,
				'raised': true,

				'callback': () => {
					this.get('_confirmedDeleteContact').perform(contact);
				}
			},

			'cancelButton': {
				'text': 'Cancel',
				'icon': 'close',

				'primary': true,
				'raised': true
			}
		};

		yield this.invokeAction('controller-action', 'displayModal', modalData);
	}).enqueue(),

	// verifyContact: task(function* (contact) {
	// 	if(contact.get('isNew')) {
	// 		this.get('notification').display({
	// 			'type': 'info',
	// 			'message': 'You should save the contact before verification'
	// 		});

	// 		return;
	// 	}

	// 	const modalData = {
	// 		'title': 'Verify Contact',
	// 		'content': `Are you sure you want to delete the <strong>${contact.get('contact')}</strong> contact?`,

	// 		'confirmButton': {
	// 			'text': 'Delete',
	// 			'icon': 'delete',

	// 			'warn': true,
	// 			'raised': true,

	// 			'callback': () => {
	// 				this.get('_confirmedDeleteContact').perform(contact);
	// 			}
	// 		},

	// 		'cancelButton': {
	// 			'text': 'Cancel',
	// 			'icon': 'close',

	// 			'primary': true,
	// 			'raised': true
	// 		}
	// 	};

	// 	yield this.invokeAction('controller-action', 'displayModal', modalData);
	// }).enqueue().retryable(backoffPolicy),

	_confirmedDeleteContact: task(function* (contact) {
		const contacts = yield this.get('model.contacts');

		try {
			const contactType = contact.get('type');
			const contactValue = contact.get('contact');

			yield contact.destroyRecord();
			contacts.removeObject(contact);

			this.get('notification').display({
				'type': 'success',
				'message': `${capitalize(contactType)} contact ${contactValue} deleted`
			});
		}
		catch(err) {
			contacts.addObject(contact);
			yield contact.rollback();

			this.get('notification').display({
				'type': 'error',
				'error': err
			});
		}
	}).enqueue().retryable(backoffPolicy)
});
