import Route from '@ember/routing/route';

export default Route.extend({
	actions: {
		'controller-action': function(action, data) {
			const controller = this.get('controller');
			if(controller && controller[action] && (typeof controller[action] === 'function'))
				return this.get('controller').send('controller-action', action, data);

			return true;
		}
	}
});
