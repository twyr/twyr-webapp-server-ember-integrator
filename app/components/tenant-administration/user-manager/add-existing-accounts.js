import BaseComponent from '../../../framework/base-component';

import { observer } from '@ember/object';
import { task, timeout } from 'ember-concurrency';

export default BaseComponent.extend({
	'selectedUser': null,

	'searchUserByEmail': task(function* (term) {
		yield timeout(750);
		return this.get('ajax').request(`/tenant-administration/user-manager/searchUsers?email=${term}`);
	}),

	'onSelectedUserChanged': observer('selectedUser', function() {
		this.get('_addSelectedUser').perform();
	}),

	'_addSelectedUser': task(function* () {
		if(!this.get('selectedUser'))
			return;

		const isDuplicate = this.get('state.model').filterBy('user_id', this.get('selectedUser.id')).get('length');
		if(isDuplicate) {
			this.set('selectedUser', null);
			return;
		}

		let userModel = this.get('store').peekRecord('tenant-administration/user-manager/user', this.get('selectedUser.id'));
		if(!userModel) userModel = yield this.get('store').findRecord('tenant-administration/user-manager/user', this.get('selectedUser.id'));

		this.get('state.model').addObject(userModel);
		this.set('selectedUser', null);
	}).enqueue(),

	'deleteUser': task(function* (user) {
		const model = yield this.get('state.model');
		model.removeObject(user);
	}).enqueue()
});
