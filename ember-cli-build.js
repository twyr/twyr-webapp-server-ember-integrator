'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const broccoliAssetRevDefaults = require('broccoli-asset-rev/lib/default-options');

module.exports = function(defaults) {
	const environment = process.env.EMBER_ENV;
	const pluginsToBlacklist = environment === 'production' ? ['ember-freestyle'] : [];

	let app = new EmberApp(defaults, {
		'name': 'twyr-webapp-server',

		'storeConfigInMeta': false,
		'autoRun': false,

		'addons': {
			'blacklist': pluginsToBlacklist
		},

		'ember-bootstrap': {
			'bootstrapVersion': 4,
			'importBootstrapFont': false,
			'importBootstrapCSS': false
		},

		'ember-power-select': {
			'theme': 'material'
		},

		'funnel': {
			'enabled': true,
			'exclude': [`${defaults.project.pkg.name}/router.js`]
		},

		'fingerprint': {
			'customHash': null,
			'extensions': broccoliAssetRevDefaults.extensions.concat(['svg'])
		},

		'outputPaths': {
			'app': {
				'html': 'index.ejs',
				'css': {
					'app': '/css/twyr-webapp-server.css'
				},
				'js': '/js/twyr-webapp-server.js'
			},

			'vendor': {
				'css': '/css/vendor.css',
				'js': '/js/vendor.js'
			}
		},

		'sassOptions': {
			'implementation': require('node-sass')
		},

		'sourcemaps': {
			'enabled': true,
			'extensions': ['css', 'js']
		}
	});

	// Use `app.import` to add additional libraries to the generated
	// output files.
	//
	// If you need to use different assets in different
	// environments, specify an object as the first parameter. That
	// object's keys should be the environment name and the values
	// should be the asset to use in that environment.
	//
	// If the library that you are including contains AMD or ES6
	// modules that you would like to import into your application
	// please specify an object with the list of modules as keys
	// along with the exports of each module as its value.
	app.import('bower_components/jstree/dist/themes/default/style.css');
	app.import('bower_components/jstree/dist/jstree.js');

	return app.toTree();
};
