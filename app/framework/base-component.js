/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
/* eslint-disable ember/closure-actions */

import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
	'store': inject('store'),

	'actions': {
		'controller-action': function(action, data) {
			if(this[action] && (typeof this[action] === 'function')) {
				this[action](data);
				return;
			}

			this.sendAction('controller-action', action, data);
		}
	}
});
