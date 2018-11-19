import BaseComponent from '../../../framework/base-component';
import { observer } from '@ember/object';

export default BaseComponent.extend({
	'editable': false,

	init() {
		this._super(...arguments);
		this.set('permissions', ['group-manager-read']);
	},

	'onHasPermissionChange': observer('hasPermission', function() {
		const updatePerm = this.get('currentUser').hasPermission('group-manager-update');
		this.set('editable', updatePerm);
	})
});
