import BaseComponent from '../../framework/base-component';

import { observer } from '@ember/object';

export default BaseComponent.extend({
	displayName: '',
	displayImage: '',

	init() {
		this._super(...arguments);
		this.set('permissions', ['registered']);

		this.get('currentUser').on('userDataUpdated', this, 'onProfileUpdated');
	},

	destroy() {
		this.get('currentUser').off('userDataUpdated', this, 'onProfileUpdated');
		this._super(...arguments);
	},

	'onHasPermissionChange': observer('hasPermission', function() {
		if(!this.get('hasPermission')) {
			this.set('displayName', '');
			this.set('displayImage', '');

			return;
		}

		const userDetails = this.get('currentUser').getUser();
		this.set('displayName', (userDetails ? userDetails['name'] : ''));
		this.set('displayImage', (userDetails ? `/profile/get-image?_random=${window.moment().valueOf()}` : ''));
	}),

	onProfileUpdated() {
		if(!this.get('hasPermission')) {
			this.set('displayName', '');
			this.set('displayImage', '');

			return;
		}

		const userDetails = this.get('currentUser').getUser();
		if(!userDetails) {
			this.set('displayName', '');
			this.set('displayImage', '');

			return;
		}

		this.set('displayName', (userDetails ? userDetails['name'] : ''));
		this.set('displayImage', (userDetails ? `/profile/get-image?_random=${window.moment().valueOf()}` : ''));
	}
});
