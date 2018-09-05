'use strict';

module.exports = function (environment) {
	let ENV = {
		'modulePrefix': 'twyr-webapp-server',
		environment,
		'rootURL': process.env.CORBER ? '' : '/',
		'locationType': process.env.CORBER ? 'hash' : 'auto',

		'pageTitle': {
			'replace': false,
			'separator': ' > '
		},

		'changeTracker': {
			'trackHasMany': true,
			'auto': true,
			'enableIsDirty': true
		},

		'googleFonts': [
			'Noto+Sans:400,400i,700,700i',
			'Noto+Serif:400,400i,700,700i&subset=devanagari',
			'Keania+One'
		],

		// Set or update content security policies
		'contentSecurityPolicy': {
			'font-src': "'self' fonts.gstatic.com",
			'style-src': "'self' fonts.googleapis.com"
		},

		'moment': {
			'allowEmpty': true,
			'includeTimezone': 'all',

			'includeLocales': true,
			'localeOutputPath': '/moment-locales'
		},

		'resizeServiceDefaults': {
			'debounceTimeout': 100,
			'heightSensitive': true,
			'widthSensitive': true,
			'injectionFactories': ['component']
		},

		'ember-paper': {
			'insertFontLinks': false
		},

		'fontawesome': {
			'icons': {
				'free-solid-svg-icons': 'all'
			}
		},

		'EmberENV': {
			'FEATURES': {
				// Here you can enable experimental features on an ember canary build
				// e.g. 'with-controller': true
			},

			'EXTEND_PROTOTYPES': {
				// Prevent Ember Data from overriding Date.parse.
			}
		},

		'APP': {
			// Here you can pass flags/options to your application instance
			// when it is created
		}
	};

	return ENV;
};

