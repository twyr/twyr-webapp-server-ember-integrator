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
			console.error(`TODO: Send Ember Error to the server using the Beacon API. But, for now...\n`, error);
		}

		on('error', function(error) {
			console.error(`TODO: Send RSVP Error to the server using the Beacon API. But, for now...\n`, error);
		});
	}
});

loadInitializers(App, config.modulePrefix);
export default App;
