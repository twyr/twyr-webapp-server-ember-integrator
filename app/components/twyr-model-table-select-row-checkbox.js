/* eslint-disable ember/avoid-leaking-state-in-ember-objects */

import BaseComponent from '../framework/base-component';

export default BaseComponent.extend({
	'actions': {
		'clickOnRow': function(index, record, event) {
			this.get('clickOnRow')(index, record);
			event.stopPropagation();
		}
	}
});
