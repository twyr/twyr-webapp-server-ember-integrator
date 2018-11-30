import BaseController from '../../framework/base-controller';
import { task } from 'ember-concurrency';

export default BaseController.extend({
	'breadcrumbStack': null,
	'selectedGroup': null,

	init() {
		this._super(...arguments);
		this.set('permissions', ['group-manager-read']);
	},

	setSelectedGroup(groupModel) {
		if(!groupModel) {
			this.set('selectedGroup', null);
			this.set('breadcrumbStack', null);

			return;
		}

		if(groupModel.get('id') === this.get('selectedGroup.id'))
			return;

		groupModel.reload({
			'include': 'tenant, parent, groups, tenantUserGroups, featurePermissions'
		})
		.then((reloadedModel) => {
			this.set('selectedGroup', reloadedModel);
			this.get('setBreadcrumbHierarchy').perform();
		})
		.catch((err) => {
			this.get('notification').display({
				'type': 'error',
				'error': err
			});
		});
	},

	'setBreadcrumbHierarchy': task(function* () {
		let currentGroup = this.get('selectedGroup');
		const breadcrumbHierarchy = [];

		while(currentGroup) {
			const currentPath = yield currentGroup.get('path');
			if(currentPath) breadcrumbHierarchy.unshift(currentGroup);

			currentGroup = yield currentGroup.get('parent');
		}

		this.set('breadcrumbStack', breadcrumbHierarchy);
	}).keepLatest()
});
