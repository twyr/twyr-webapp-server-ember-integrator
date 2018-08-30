/* eslint-disable ember/avoid-leaking-state-in-ember-objects */

import BaseComponent from '../framework/base-component';

export default BaseComponent.extend({
	'actions': {
		'toggleAllSelection': function() {
			this.get('toggleAllSelection')();
		}
	}
});
