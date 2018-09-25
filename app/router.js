import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('freestyle');
  this.route('profile');
  this.route('dashboard');
  this.route('tenant-administration', function() {
    this.route('feature-manager');
  });
});

export default Router;
