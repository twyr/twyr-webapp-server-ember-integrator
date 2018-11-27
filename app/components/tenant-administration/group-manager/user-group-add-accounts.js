import BaseComponent from '../../../framework/base-component';
import { A } from '@ember/array';

import ArrayProxy from '@ember/array/proxy';

import EmberObject from '@ember/object';
import ObjectProxy from '@ember/object/proxy';

import { task } from 'ember-concurrency';

export default BaseComponent.extend({
	'possibleTenantUsers': null,

	'onWillInsertElement': task(function* () {
		const selectedGroupId = this.get('state.group.id');
		const possibleTenantUsers = yield this.get('ajax').request(`/tenant-administration/group-manager/possibleTenantUsersList?group=${selectedGroupId}`);

		this.set('possibleTenantUsers', ArrayProxy.create({
			'content': A(possibleTenantUsers.map((possibleTenantUser) => {
				return ObjectProxy.create({
					'content': EmberObject.create(possibleTenantUser)
				});
			}))
		}));
	}).on('willInsertElement'),

	'toggleTenantUser': task(function* (tenantUser) {
		const alreadyInModel = yield this.get('state.model').filterBy('id', tenantUser.get('id')).objectAt(0);

		if(alreadyInModel)
			this.get('state.model').removeObject(tenantUser);
		else
			this.get('state.model').addObject(tenantUser);
	}).enqueue()
});
