import BaseComponent from '../../framework/base-component';
import env from 'twyr-webapp-server/config/environment';

import { observer } from '@ember/object';
import { task, timeout } from 'ember-concurrency';

export default BaseComponent.extend({
	_map: undefined,
	_markers: undefined,
	approxLocation: '',

	onDidInsertElement: task(function* () {
		const notification = this.get('notification');
		this.$('md-card').css('box-shadow', 'none');

		try {
			this.set('_markers', []);

			if(window.google && window.google.maps) {
				yield timeout(500);

				const mapCanvas = window.document.getElementById(`tenant-location-editor-map-container-${this.get('state.model.id')}`),
					mapOptions = {
						'zoom': 16,
						'mapTypeId': window.google.maps.MapTypeId.ROADMAP
					};

				this.set('_map', new window.google.maps.Map(mapCanvas, mapOptions));
				this.get('_map').addListener('click', (position) => {
					this.get('_onClickMap').perform(position);
				});

				yield this.get('_resetGoogleMap').perform();
			}
		}
		catch(err) {
			notification.display({
				'type': 'error',
				'error': err
			});
		}
	}).drop().on('didInsertElement'),

	onWillDestroyElement: task(function* () {
		if(!this.get('_map'))
			return;

		yield this.get('_resetGoogleMap').perform();

		window.google.maps.event.clearInstanceListeners(this.get('_map'));
		this.set('_map', undefined);
	}).drop().on('willDestroyElement'),

	onApproxLocationChanged: observer('approxLocation', function() {
		if(!this.get('state.model.isNew'))
			return;

		if(this.get('state.model.name') === this.get('approxLocation'))
			return;

		this.set('state.model.name', this.get('approxLocation').split(',')[0].trim());
		this.get('_markGoogleMap').perform();
	}),

	_onClickMap: task(function* (position) {
		this._clearMapMarkers();

		this.get('_map').setCenter({
			'lat': position.latLng.lat(),
			'lng': position.latLng.lng()
		});

		this._setMapMarker({
			'lat': position.latLng.lat(),
			'lng': position.latLng.lng()
		});

		yield this.get('_geoCodeMarker').perform({
			'lat': position.latLng.lat(),
			'lng': position.latLng.lng()
		});
	}).keepLatest(),

	_resetGoogleMap: task(function* () {
		this._clearMapMarkers();

		if(!this.get('state.model'))
			return;

		if(!this.get('_map'))
			return;

		this.get('_map').setZoom(16);

		if(this.get('state.model.isNew') && (this.get('state.model.latitude') === 0)) {
			this.set('approxLocation', this.get('state.model.name'));

			yield this.get('_markGoogleMap').perform();
			return;
		}

		this.get('_map').setCenter({
			'lat': this.get('state.model.latitude') || 0,
			'lng': this.get('state.model.longitude') || 0
		});

		this._setMapMarker({
			'lat': this.get('state.model.latitude') || 0,
			'lng': this.get('state.model.longitude') || 0
		});
	}).drop(),

	_markGoogleMap: task(function* () {
		yield timeout(3000);

		this._clearMapMarkers();
		if(!this.get('_map'))
			return;

		if(!this.get('approxLocation') || (this.get('approxLocation').trim() === ''))
			this.set('approxLocation', 'Charminar, Hyderabad, India');

		const addressData = yield this.get('ajax').request(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.get('approxLocation').replace(/ /g, '+')}&key=${env['ember-google-maps']['key']}`, {
			'method': 'GET',
			'xhrFields': {
				'withCredentials': false
			},
			'dataType': 'json'
		});

		this.get('_map').setZoom(16);
		this.get('_map').setCenter(addressData.results[0].geometry.location);

		addressData.results.forEach((result) => {
			this._setMapMarker(result.geometry.location);
		});

		if(addressData.results.length) {
			yield this.get('_geoCodeMarker').perform(addressData.results[0].geometry.location);
		}
	}).restartable(),

	_clearMapMarkers() {
		this.get('_markers').forEach((marker) => {
			marker.setMap(null);
			if(window.google && window.google.maps) window.google.maps.event.clearInstanceListeners(marker);
		});

		this.get('_markers').clear();
	},

	_setMapMarker(location) {
		if(!this.get('_map'))
			return;

		const marker = new window.google.maps.Marker({
			'position': location,
			'map': this.get('_map')
		});

		marker.addListener('click', (function(mark) {
			this.get('_map').setZoom(16);
			this.get('_map').setCenter(mark.getPosition());
			this.get('_geoCodeMarker').perform(mark.getPosition());
		}).bind(this, marker));

		this.get('_markers').addObject(marker);
	},

	_geoCodeMarker: task(function* (location) {
		if(!(window.google && window.google.maps))
			return;

		const timezone = yield this.get('ajax').request(`https://maps.googleapis.com/maps/api/timezone/json?location=${location.lat},${location.lng}&timestamp=${Math.floor((new Date()).valueOf() / 1000)}&key=${env['ember-google-maps']['key']}`, {
			'method': 'GET',
			'xhrFields': {
				'withCredentials': false
			},
			'dataType': 'json'
		});

		this.set('state.model.latitude', location.lat);
		this.set('state.model.longitude', location.lng);
		this.set('state.model.timezoneId', timezone.timeZoneId);
		this.set('state.model.timezoneName', timezone.timeZoneName);

		const geoCoder = new window.google.maps.Geocoder();
		geoCoder.geocode({ 'location': location }, (results, status) => {
			if(status !== window.google.maps.GeocoderStatus.OK)
				return;

			const geoCodedAddr = [];
			results.forEach((result) => {
				geoCodedAddr.push(...result.address_components);
			});

			if(!geoCodedAddr.length)
				return;

			const area = [],
				city = [],
				country = [],
				line1 = [],
				line2 = [],
				line3 = [],
				postBox = [],
				postalCode = [],
				state = [],
				streetAddress = [];

			geoCodedAddr.forEach((addrComponent) => {
				if(addrComponent.types.indexOf('street_address') >= 0) {
					if(!streetAddress.length) streetAddress.push(addrComponent.long_name);
					return;
				}

				if(addrComponent.types.indexOf('post_box') >= 0) {
					if(!postBox.length) postBox.push(addrComponent.long_name);
					return;
				}

				if(addrComponent.types.indexOf('room') >= 0) {
					if(!line1[0]) line1[0] = addrComponent.long_name;
					return;
				}

				if(addrComponent.types.indexOf('floor') >= 0) {
					if(!line1[1]) line1[1] = addrComponent.long_name;
					return;
				}

				if(addrComponent.types.indexOf('subpremise') >= 0) {
					if(!line1[2]) line1[2] = addrComponent.long_name;
					return;
				}

				if(addrComponent.types.indexOf('premise') >= 0) {
					if(!line1[3]) line1[3] = addrComponent.long_name;
					return;
				}

				if(addrComponent.types.indexOf('street_number') >= 0) {
					if(!line2[0]) line2[0] = addrComponent.long_name;
					return;
				}

				if(addrComponent.types.indexOf('route') >= 0) {
					if(!line2[1]) line2[1] = addrComponent.long_name;
					return;
				}

				if(addrComponent.types.indexOf('neighborhood') >= 0) {
					if(!line3.indexOf(addrComponent.long_name) < 0)
						line3.push(addrComponent.long_name);

					return;
				}

				if(addrComponent.types.indexOf('sublocality') >= 0) {
					if(!area[5]) area[5] = addrComponent.long_name;
					return;
				}

				if(addrComponent.types.indexOf('sublocality_level_1') >= 0) {
					if(!area[4]) area[4] = addrComponent.long_name;
					return;
				}

				if(addrComponent.types.indexOf('sublocality_level_2') >= 0) {
					if(!area[3]) area[3] = addrComponent.long_name;
					return;
				}

				if(addrComponent.types.indexOf('sublocality_level_3') >= 0) {
					if(!area[2]) area[2] = addrComponent.long_name;
					return;
				}

				if(addrComponent.types.indexOf('sublocality_level_4') >= 0) {
					if(!area[1]) area[1] = addrComponent.long_name;
					return;
				}

				if(addrComponent.types.indexOf('sublocality_level_5') >= 0) {
					if(!area[0]) area[0] = addrComponent.long_name;
					return;
				}

				if(addrComponent.types.indexOf('locality') >= 0) {
					if(city.indexOf(addrComponent.long_name) < 0)
						city.push(addrComponent.long_name);

					return;
				}

				if(addrComponent.types.indexOf('administrative_area_level_1') >= 0) {
					if(!state[4]) state[4] = addrComponent.long_name;
					return;
				}

				if(addrComponent.types.indexOf('administrative_area_level_2') >= 0) {
					if(!state[3]) state[3] = addrComponent.long_name;
					return;
				}

				if(addrComponent.types.indexOf('administrative_area_level_3') >= 0) {
					if(!state[2]) state[2] = addrComponent.long_name;
					return;
				}

				if(addrComponent.types.indexOf('administrative_area_level_4') >= 0) {
					if(!state[1]) state[1] = addrComponent.long_name;
					return;
				}

				if(addrComponent.types.indexOf('administrative_area_level_5') >= 0) {
					if(!state[0]) state[0] = addrComponent.long_name;
					return;
				}

				if(addrComponent.types.indexOf('country') >= 0) {
					if(country.indexOf(addrComponent.long_name) < 0)
						country.push(addrComponent.long_name);

					return;
				}

				if(addrComponent.types.indexOf('postal_code') >= 0) {
					if(postalCode.indexOf(addrComponent.long_name) < 0)
						postalCode.push(addrComponent.long_name);

					return;
				}
			});

			this.set('state.model.line1', line1.filter((lineSegment) => { return !!lineSegment; }).join(', ').trim());

			if(line2.length)
				this.set('state.model.line2', line2.filter((lineSegment) => { return !!lineSegment; }).join(', ').trim());
			else if(streetAddress.length)
				this.set('state.model.line2', streetAddress.filter((lineSegment) => { return !!lineSegment; }).join(', ').trim());
			else if(postBox.length)
				this.set('state.model.line2', postBox.filter((lineSegment) => { return !!lineSegment; }).join(', ').trim());

			this.set('state.model.line3', line3.filter((lineSegment) => { return !!lineSegment; }).join(', ').trim());
			this.set('state.model.area', area.filter((areaSegment) => { return !!areaSegment; }).join(', ').trim());
			this.set('state.model.city', city.filter((citySegment) => { return !!citySegment; }).join(', ').trim());
			this.set('state.model.state', state.filter((stateSegment) => { return !!stateSegment; }).join(', ').trim());
			this.set('state.model.country', country.filter((countrySegment) => { return !!countrySegment; }).join(', ').trim());
			this.set('state.model.postalCode', postalCode.filter((codeSegment) => { return !!codeSegment; }).join(', ').trim());

			if(this.get('state.model.line1') === '' && this.get('state.model.line2') !== '') {
				this.set('state.model.line1', this.get('state.model.line2'));
				this.set('state.model.line2', '');
			}
		});
	}).restartable()
});
