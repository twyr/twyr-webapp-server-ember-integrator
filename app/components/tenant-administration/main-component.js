import BaseComponent from '../../framework/base-component';
import ExponentialBackoffPolicy from 'ember-concurrency-retryable/policies/exponential-backoff';
import ResizeAware from 'ember-resize/mixins/resize-aware';

import env from 'twyr-webapp-server/config/environment';

import { observer } from '@ember/object';
import { task, timeout } from 'ember-concurrency';

const backoffPolicy = new ExponentialBackoffPolicy({
	'multiplier': 1.5,
	'minDelay': 30,
	'maxDelay': 400
});

export default BaseComponent.extend(ResizeAware, {
	resizeWidthSensitive: true,
	resizeHeightSensitive: true,
	staticUrl: null,

	onDidInsertElement: task(function* () {
		yield this.get('displayPrimaryLocation').perform();
	}).drop().on('didInsertElement'),

	onPrimaryLocationChange: observer('model.location', 'model.location.latitude', 'model.location.longitude', function() {
		this.get('displayPrimaryLocation').perform();
	}),

	debouncedDidResize() {
		this.get('displayPrimaryLocation').perform();
	},

	addPrimaryLocation: task(function* () {
		try {
			const self = this;

			const primaryTenantLocation = this.get('store').createRecord('tenant-administration/tenant-location', {
				'isPrimary': true
			});

			const modalData = {
				'title': 'Add Location',
				'dialogClass': 'flex-75',

				'componentName': 'tenant-administration/tenant-location-editor',
				'componentState': {
					'model': primaryTenantLocation
				},

				'confirmButton': {
					'text': 'Add',
					'icon': 'check',

					'primary': true,
					'raised': true,

					'callback': () => {
						self.get('saveLocation').perform(primaryTenantLocation);
					}
				},

				'cancelButton': {
					'text': 'Cancel',
					'icon': 'cancel',

					'warn': true,
					'raised': true,

					'callback': () => {
						self.get('removeLocation').perform(primaryTenantLocation);
					}
				}
			};

			this.set('model.location', primaryTenantLocation);
			yield this.invokeAction('controller-action', 'displayModal', modalData);
		}
		catch(err) {
			this.get('notification').display({
				'type': 'error',
				'error': err
			});
		}
	}).drop(),

	editPrimaryLocation: task(function* () {
		try {
			const self = this;
			const modalData = {
				'title': 'Add Location',
				'dialogClass': 'flex-75',

				'componentName': 'tenant-administration/tenant-location-editor',
				'componentState': {
					'model': this.get('model.location')
				},

				'confirmButton': {
					'text': 'Save',
					'icon': 'check',

					'primary': true,
					'raised': true,

					'callback': () => {
						self.get('saveLocation').perform(this.get('model.location'));
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

	displayPrimaryLocation: task(function* () {
		yield timeout(500);

		const staticLocationdisplayDiv = document.getElementById('tenant-administrator-main-component-static-location-display');
		if(!staticLocationdisplayDiv) return;

		const mapWidth = staticLocationdisplayDiv.clientWidth;
		const mapHeight = staticLocationdisplayDiv.clientHeight;

		const mapParameters = {
			'lat': 0,
			'lng': 0,
			'key': env['ember-google-maps']['key']
		};

		const location = yield this.get('model.location');
		if(location) {
			mapParameters.lat = location.get('latitude');
			mapParameters.lng = location.get('longitude');
		}

		this.set('staticUrl', `//maps.googleapis.com/maps/api/staticmap?center=${mapParameters.lat},${mapParameters.lng}&size=${mapWidth}x${mapHeight}&maptype=roadmap&markers=color:blue%7Clabel:S%7C${mapParameters.lat},${mapParameters.lng}&key=${mapParameters.key}`);
	}).keepLatest(),

	save: task(function* () {
		try {
			yield this.get('model').save();
			this.get('notification').display({
				'type': 'success',
				'message': 'Tenant saved successfully'
			});
		}
		catch(err) {
			this.get('notification').display({
				'type': 'error',
				'error': err
			});
		}
	}).drop().retryable(backoffPolicy),

	cancel: task(function* () {
		yield this.get('model').rollback();
	}).drop(),

	saveLocation: task(function* (tenantLocation) {
		try {
			if(tenantLocation.save) yield tenantLocation.save();
			if(tenantLocation.content && tenantLocation.content.save) yield tenantLocation.content.save();

			if(tenantLocation.reload) yield tenantLocation.reload();
			if(tenantLocation.content && tenantLocation.content.reload) yield tenantLocation.content.reload();
		}
		catch(err) {
			this.get('notification').display({
				'type': 'error',
				'error': err
			});
		}
	}).drop().retryable(backoffPolicy),

	removeLocation: task(function* (tenantLocation) {
		try {
			if(tenantLocation.destroyRecord) yield tenantLocation.destroyRecord();
			if(tenantLocation.content && tenantLocation.content.destroyRecord) yield tenantLocation.content.destroyRecord();
		}
		catch(err) {
			this.get('notification').display({
				'type': 'error',
				'error': err
			});
		}
		finally {
			this.set('model.location', null);
		}
	}).drop().retryable(backoffPolicy)
});
