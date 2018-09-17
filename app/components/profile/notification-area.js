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

		this.get('currentUser').on('userDataUpdated', this, this.onProfileUpdated);
	},

	destroy() {
		this.get('currentUser').off('userDataUpdated', this, this.onProfileUpdated);
		this._super(...arguments);
	},

	onHasPermissionChange: observer('hasPermission', function() {
		if(!this.get('hasPermission')) {
			this.set('displayName', '');
			return;
		}

		const userDetails = this.get('currentUser').getUser();
		this.set('displayName', (userDetails ? userDetails['name'] : ''));
	}),

	onProfileUpdated() {
		if(!this.get('hasPermission')) {
			this.set('displayName', '');
			return;
		}

		const userDetails = this.get('currentUser').getUser();
		if(!userDetails) {
			this.set('displayName', '');
			return;
		}

		this.set('displayName', (userDetails ? userDetails['name'] : ''));
	}
});
