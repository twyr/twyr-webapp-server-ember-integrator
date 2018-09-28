import BaseComponent from '../../../framework/base-component';

import { observer } from '@ember/object';
import { task } from 'ember-concurrency';

export default BaseComponent.extend({
	didInsertElement() {
		this._super(...arguments);

		const moduTree = this.$('div#tenant-administration-feature-manager-tree-container').jstree({
			'core': {
				'check_callback': function(operation) {
					if(operation === 'move_node')
						return false;

					if(operation === 'rename_node')
						return false;

					if(operation === 'delete_node')
						return false;

					return true;
				},

				'multiple': false,

				'themes': {
					'name': 'default',
					'icons': false,
					'dots': false,
					'responsive': true
				},

				'data': {
					'url': '/tenant-administration/feature-manager/tree',
					'dataType': 'json',
					'data': function(node) {
						return { 'id': node.id };
					}
				}
			},

			'plugins': ['sort', 'unique'],
		});

		moduTree.on('ready.jstree', () => {
			const rootNodeId = this.$('div#tenant-administration-feature-manager-tree-container > ul > li:first-child').attr('id');

			this.$('div#tenant-administration-feature-manager-tree-container').jstree('open_node', rootNodeId);
			this.$('div#tenant-administration-feature-manager-tree-container').jstree('activate_node', rootNodeId, false, false);
		});

		moduTree.on('activate_node.jstree', (event, data) => {
			this.get('onActivateNode').perform(data.node);
		});
	},

	willDestroyElement() {
		this.invokeAction('controller-action', 'setSelectedFeature', null);
		this.$('div#tenant-administration-feature-manager-tree-container').jstree('destroy', true);

		this._super(...arguments);
	},

	onActivateNode: task(function* (treeNode) {
		try {
			const serverFeature = yield this.get('selectedFeature.feature');
			if(serverFeature && (serverFeature.get('id') === treeNode.id))
				return;

			const store = this.get('store');

			let loadedFeatureModels = store.peekAll('tenant-administration/feature-manager/tenant-feature');
			if(!loadedFeatureModels.get('length')) {
				yield store.findAll('tenant-administration/feature-manager/tenant-feature');
				loadedFeatureModels = store.peekAll('tenant-administration/feature-manager/tenant-feature');

				for(let idx = 0; idx < loadedFeatureModels.get('length'); idx++) {
					const loadedFeatureModel = loadedFeatureModels.objectAt(idx);
					yield loadedFeatureModel.get('feature');
				}
			}

			const featureModel = loadedFeatureModels.filter((loadedFeatureModel) => {
				return loadedFeatureModel.get('feature.id') === treeNode.id
			});

			this.invokeAction('controller-action', 'setSelectedFeature', featureModel.shift());
		}
		catch(err) {
			this.get('notification').display({
				'type': 'error',
				'error': err
			});
		}
	}).keepLatest(),

	onSelectedFeatureChanged: observer('selectedFeature', function() {
		if(!this.get('selectedFeature'))
			return;

		if(this.$('div#tenant-administration-feature-manager-tree-container').jstree('get_selected')[0] === this.get('selectedFeature.feature.id'))
			return;

		this.$('div#tenant-administration-feature-manager-tree-container').jstree('activate_node', this.get('selectedFeature.feature.id'), false, false);
		this.$('div#tenant-administration-feature-manager-tree-container').jstree('open_node', this.get('selectedFeature.feature.id'));
	}),

});
