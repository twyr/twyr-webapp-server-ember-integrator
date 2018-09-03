/* eslint-disable ember/avoid-leaking-state-in-ember-objects */

import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
	'store': inject('store'),

	'actions': {
		'controller-action': function(action, data) {
			if(this[action] && (typeof this[action] === 'function')) {
				this[action](data);
				return;
			}

			return true;
		}
	}
});
