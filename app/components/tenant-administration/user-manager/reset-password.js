import BaseComponent from '../../../framework/base-component';
import { observer } from '@ember/object';

export default BaseComponent.extend({
	init() {
		this._super(...arguments);
		this.set('permissions', ['user-manager-update']);
	},

	onGeneratePasswordChange: observer('state.generateRandomPassword', function() {
		this.set('state.newPassword', '');
	})
});
