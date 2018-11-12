import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
	'currentUser': inject('current-user'),
	'router': inject('router'),

	actions: {
		'controller-action': function(action, data) {
			const controller = this.get('controller');
			if(controller && controller[action] && (typeof controller[action] === 'function'))
				return this.get('controller').send('controller-action', action, data);

			return true;
		}
	}
});
