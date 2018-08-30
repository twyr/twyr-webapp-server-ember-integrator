import Application from '@ember/application';
import Evented from '@ember/object/evented';
import Resolver from './resolver';

import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const App = Application.extend(Evented, {
  'modulePrefix': config.modulePrefix,
  'podModulePrefix': config.podModulePrefix,
  'Resolver': Resolver
});

loadInitializers(App, config.modulePrefix);
export default App;
