import BaseRoute from '../framework/base-route';

export default BaseRoute.extend({
	actions: {
		'controller-action': function(action, data) {
			this.get('controller').send('controller-action', action, data);
		}
	}
});
