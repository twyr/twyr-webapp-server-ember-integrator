import BaseController from '../../framework/base-controller';
import { task } from 'ember-concurrency';

export default BaseController.extend({
	'breadcrumbStack': null,

	init() {
		this._super(...arguments);
		this.set('permissions', ['group-manager-read']);
	},

	setSelectedGroup(groupModel) {
		if(!groupModel) {
			this.set('model', null);
			this.set('breadcrumbStack', null);

			return;
		}

		if(groupModel.get('id') === this.get('model.id'))
			return;

		groupModel.reload({
			'include': 'parent, groups'
		})
		.then((reloadedModel) => {
			this.set('model', reloadedModel);
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
		let currentGroup = this.get('model');
		const breadcrumbHierarchy = [];

		while(currentGroup) {
			const currentPath = yield currentGroup.get('path');
			if(currentPath) breadcrumbHierarchy.unshift(currentGroup);

			currentGroup = yield currentGroup.get('parent');
		}

		this.set('breadcrumbStack', breadcrumbHierarchy);
	}).keepLatest()
});
