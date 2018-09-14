import BaseComponent from '../../framework/base-component';

import computedStyle from 'ember-computed-style';
import { computed } from '@ember/object';
import { observer } from '@ember/object';

export default BaseComponent.extend({
	attributeBindings: ['style'],
	style: computedStyle('display'),

	permissions: null,
	displayName: '',

	display: computed('hasPermission', function() {
		return { 'display': (this.get('hasPermission') ? 'unset' : 'none') };
	}),

	init() {
		this._super(...arguments);
		this.set('permissions', ['registered']);
	},

	onHasPermissionChange: observer('hasPermission', function() {
		if(!this.get('hasPermission')) {
			this.set('displayName', '');
			return;
		}

		const userDetails = this.get('currentUser').getUser();
		this.set('displayName', (userDetails ? userDetails['name'] : ''));
	})
});
