import BaseController from '../framework/base-controller';

import { computed } from '@ember/object';
import { observer } from '@ember/object';
import { on } from '@ember/object/evented';

export default BaseController.extend({
	'canViewFeatureAdministrator': false,
	'canViewGroupAdministrator': false,
	'canViewUserAdministrator': false,

	'hasSubModulePermissions': computed.or('canViewFeatureAdministrator', 'canViewGroupAdministrator', 'canViewUserAdministrator'),

	init() {
		this._super(...arguments);

		this.set('permissions', ['tenant-administration-read']);
		this.get('currentUser').on('userDataUpdated', this, 'onUserDataUpdated');
	},

	destroy() {
		this.get('currentUser').off('userDataUpdated', this, 'onUserDataUpdated');
		this._super(...arguments);
	},

	onPermissionChanges: on('init', observer('permissions', 'permissions.[]', 'permissions.@each', function() {
		this.onUserDataUpdated();
	})),

	onUserDataUpdated() {
		const currentUser = this.get('currentUser');

		this.set('canViewFeatureAdministrator', currentUser.hasPermission('feature-manager-read'));
		this.set('canViewGroupAdministrator', currentUser.hasPermission('group-manager-read'));
		this.set('canViewUserAdministrator', currentUser.hasPermission('user-manager-read'));
	}
});
