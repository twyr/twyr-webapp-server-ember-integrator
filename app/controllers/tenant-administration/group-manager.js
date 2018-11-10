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

		this.set('model', groupModel);
		this.get('setBreadcrumbHierarchy').perform();
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
