import BaseComponent from '../../framework/base-component';

import computedStyle from 'ember-computed-style';
import { computed } from '@ember/object';

export default BaseComponent.extend({
	attributeBindings: ['style'],
	style: computedStyle('display'),

	display: computed('hasPermission', function() {
		return { 'display': (this.get('hasPermission') ? 'block' : 'none') };
	}),

	init() {
		this._super(...arguments);
		this.set('permissions', ['registered']);
	}
});
