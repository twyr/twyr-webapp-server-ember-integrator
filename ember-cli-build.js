'use strict';

const Funnel = require('broccoli-funnel');
const UnwatchedDir = require('broccoli-source').UnwatchedDir;
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
    let app = new EmberApp(defaults, {
		'autoRun': false,
		'storeConfigInMeta': false,

		'fingerprint': {
			'customHash': null
		},

		'ace': {
            'exts': ['emmet', 'language_tools', 'searchbox', 'spellcheck', 'split', 'statusbar'],
            'modes': ['css', 'handlebars', 'html', 'javascript', 'json'],
            'themes': ['eclipse'],
            'workers': ['css', 'html', 'javascript', 'json'],

            'workerPath': '/ace'
        },

        'ember-font-awesome': {
            'includeFontAwesomeAssets': false
        },

        'ember-bootstrap': {
            'bootstrapVersion': 4,
            'importBootstrapFont': false,
            'importBootstrapCSS': false
        },

        'nodeModulesToVendor': [
            new Funnel(new UnwatchedDir('node_modules/js-cookie/src'), {
                destDir: 'js-cookie'
            }),

            new Funnel(new UnwatchedDir('node_modules/jstree/dist'), {
                destDir: 'jstree'
            }),

            new Funnel(new UnwatchedDir('node_modules/diff-match-patch'), {
                destDir: 'diff-match-patch',
                files: ['index.js']
            }),

            new Funnel(new UnwatchedDir('node_modules/golden-layout'), {
                destDir: 'golden-layout'
            }),

            new Funnel(new UnwatchedDir('node_modules/handsontable/dist'), {
                destDir: 'handsontable'
            }),
        ]
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

    app.import('vendor/jstree/themes/default/style.css');
    app.import('vendor/golden-layout/src/css/goldenlayout-base.css');
    app.import('vendor/golden-layout/src/css/goldenlayout-light-theme.css');
    app.import('vendor/handsontable/handsontable.full.css');

    app.import('vendor/js-cookie/js.cookie.js');
    app.import('vendor/jstree/jstree.js');
    app.import('vendor/golden-layout/dist/goldenlayout.js');
    app.import('vendor/handsontable/handsontable.full.js');
    app.import('vendor/diff-match-patch/index.js');

    return app.toTree();
};
