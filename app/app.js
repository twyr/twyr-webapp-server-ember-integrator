import Application from '@ember/application';
import Evented from '@ember/object/evented';
import Resolver from './resolver';

import { inject } from '@ember/service';
import { on } from 'rsvp';

import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const App = Application.extend(Evented, {
	'modulePrefix': config.modulePrefix,
	'podModulePrefix': config.podModulePrefix,
	'Resolver': Resolver,

	ajax: inject('ajax'),
	currentUser: inject('current-user'),

	init() {
		this._super(...arguments);

		window.Ember.onerror = function(error) {
			const beaconData = {
				'dataType': 'json',
				'data': {
					'user': this.get('currentUser').getUser(),
					'urlPath': location.href,
					'error': error.message,
					'stack': error.stack
				}
			};

			if(navigator.sendBeacon) {
				navigator.sendBeacon('/collectClientErrorData', beaconData);
			}
			else {
				this.get('ajax').post('/collectClientErrorData', beaconData);
			}
		}

		on('error', function(error) {
			const beaconData = {
				'dataType': 'json',
				'data': {
					'user': this.get('currentUser').getUser(),
					'urlPath': location.href,
					'error': error.message,
					'stack': error.stack
				}
			};

			if(navigator.sendBeacon) {
				navigator.sendBeacon('/collectClientErrorData', beaconData);
			}
			else {
				this.get('ajax').post('/collectClientErrorData', beaconData);
			}
		});
	}
});

loadInitializers(App, config.modulePrefix);
export default App;
