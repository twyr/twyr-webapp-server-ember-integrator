import Application from '@ember/application';
import Evented from '@ember/object/evented';
import Resolver from './resolver';

import { on } from 'rsvp';

import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const App = Application.extend(Evented, {
	'modulePrefix': config.modulePrefix,
	'podModulePrefix': config.podModulePrefix,
	'Resolver': Resolver,

	init() {
		this._super(...arguments);

		window.Ember.onerror = function(error) {
			const beaconData = {
				'data': {
					'user': window.twyrUserId,
					'tenant': window.twyrTenantId,
					'urlPath': location.href,
					'error': error.message,
					'stack': error.stack
				}
			};

			let beaconStatus = false;
			if(navigator.sendBeacon) {
				const formData = new FormData();
				Object.keys(beaconData.data).forEach((key) => { formData.append(key, beaconData.data[key]); });

				// beaconStatus = navigator.sendBeacon('/collectClientErrorData?source=onerror&method=beacon', formData);
			}

			if(!beaconStatus) {
				beaconData.dataType = 'json';
				beaconData.method = 'post';
				beaconData.type = 'post';
				beaconData.url = '/collectClientErrorData?source=onerror&method=ajax';

				window.$.ajax(beaconData);
			}
		}

		on('error', function(error) {
			const beaconData = {
				'data': {
					'user': window.twyrUserId,
					'tenant': window.twyrTenantId,
					'urlPath': location.href,
					'error': error.message,
					'stack': error.stack
				}
			};

			let beaconStatus = false;
			if(navigator.sendBeacon) {
				const formData = new FormData();
				Object.keys(beaconData.data).forEach((key) => { formData.append(key, beaconData.data[key]); });

				// beaconStatus = navigator.sendBeacon('/collectClientErrorData?source=rsvperror&method=beacon', formData);
			}

			if(!beaconStatus) {
				beaconData.dataType = 'json';
				beaconData.method = 'post';
				beaconData.type = 'post';
				beaconData.url = '/collectClientErrorData?source=rsvperror&method=ajax';

				window.$.ajax(beaconData);
			}
		});
	}
});

loadInitializers(App, config.modulePrefix);
export default App;
