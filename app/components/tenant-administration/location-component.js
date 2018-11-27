import BaseComponent from '../../framework/base-component';
import ExponentialBackoffPolicy from 'ember-concurrency-retryable/policies/exponential-backoff';
import ResizeAware from 'ember-resize/mixins/resize-aware';

import env from 'twyr-webapp-server/config/environment';

import { observer } from '@ember/object';
import { on } from '@ember/object/evented';
import { task, timeout } from 'ember-concurrency';

const backoffPolicy = new ExponentialBackoffPolicy({
	'multiplier': 1.5,
	'minDelay': 30,
	'maxDelay': 400
});

export default BaseComponent.extend(ResizeAware, {
	classNames: ['flex-100', 'flex-gt-sm-50', 'flex-gt-md-60', 'flex-gt-lg-70', 'layout-row', 'layout-align-center-stretch'], // eslint-disable-line ember/avoid-leaking-state-in-ember-objects

	resizeWidthSensitive: true,
	resizeHeightSensitive: true,
	staticUrl: null,

	editable: false,

	init() {
		this._super(...arguments);
		this.set('permissions', ['tenant-administration-read']);
	},

	onHasPermissionChange: observer('hasPermission', function() {
		const updatePerm = this.get('currentUser').hasPermission('tenant-administration-update');
		this.set('editable', updatePerm);
	}),

	onDidInsertElement: task(function* () {
		yield this.get('displayPrimaryLocation').perform();
	}).drop().on('didInsertElement'),

	onPrimaryLocationChange: observer('model.location', 'model.location.latitude', 'model.location.longitude', function() {
		this.get('displayPrimaryLocation').perform();
	}),

	debouncedDidResize(width, height) {
		if(!width || !height) return;
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
						self.get('saveLocation').perform(self.get('model.location'));
					}
				},

				'cancelButton': {
					'text': 'Cancel',
					'icon': 'cancel',

					'warn': true,
					'raised': true,

					'callback': () => {
						const location = self.get('model.location');
						if(location.rollback) {
							location.rollback();
							return;
						}

						if(location.content.rollback) location.content.rollback();
					}
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
		yield timeout(1500);

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

	saveLocation: task(function* (tenantLocation) {
		if(tenantLocation.save) yield tenantLocation.save();
		if(tenantLocation.content && tenantLocation.content.save) yield tenantLocation.content.save();
	}).drop().evented().retryable(backoffPolicy),

	saveLocationSucceeded: on('saveLocation:succeeded', function(taskInstance) {
		const tenantLocation = taskInstance.args[0];
		if(tenantLocation && tenantLocation.reload) tenantLocation.reload();
		if(tenantLocation.content && tenantLocation.content.reload) tenantLocation.content.reload();
	}),

	saveLocationErrored: on('saveLocation:errored', function(taskInstance, err) {
		const tenantLocation = taskInstance.args[0];
		if(tenantLocation.rollback) tenantLocation.rollback();
		if(tenantLocation.content && tenantLocation.content.rollback) tenantLocation.content.rollback();

		this.get('notification').display({
			'type': 'error',
			'error': err
		});
	}),

	removeLocation: task(function* (tenantLocation) {
		if(tenantLocation.destroyRecord) yield tenantLocation.destroyRecord();
		if(tenantLocation.content && tenantLocation.content.destroyRecord) yield tenantLocation.content.destroyRecord();
	}).drop().evented().retryable(backoffPolicy),

	removeLocationSucceeded: on('removeLocation:succeeded', function() {
		this.set('model.location', null);
	}),

	removeLocationErrored: on('removeLocation:errored', function(taskInstance, err) {
		const tenantLocation = taskInstance.args[0];
		if(tenantLocation.rollback) tenantLocation.rollback();
		if(tenantLocation.content && tenantLocation.content.rollback) tenantLocation.content.rollback();

		this.get('notification').display({
			'type': 'error',
			'error': err
		});
	})
});
