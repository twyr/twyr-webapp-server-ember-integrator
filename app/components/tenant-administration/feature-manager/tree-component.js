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
					'url': '/server-administration/features/tree',
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
			let serverFeature = yield this.get('model');
			if(serverFeature && (serverFeature.get('id') === treeNode.id))
				return;

			const store = this.get('store');
			serverFeature = store.peekRecord('server-administration/feature', treeNode.id);
			if(!serverFeature) serverFeature = yield store.findRecord('server-administration/feature', treeNode.id, {
				'include': 'permissions'
			});

			this.$('div#tenant-administration-feature-manager-tree-container').jstree('open_node', treeNode.id);
			this.invokeAction('controller-action', 'setSelectedFeature', serverFeature);
		}
		catch(err) {
			this.get('notification').display({
				'type': 'error',
				'error': err
			});
		}
	}).keepLatest(),

	onSelectedFeatureChanged: observer('model', function() {
		if(!this.get('model'))
			return;

		if(this.$('div#tenant-administration-feature-manager-tree-container').jstree('get_selected')[0] === this.get('model.id'))
			return;

		this.$('div#tenant-administration-feature-manager-tree-container').jstree('activate_node', this.get('model.id'), false, false);
		this.$('div#tenant-administration-feature-manager-tree-container').jstree('open_node', this.get('model.id'));
	}),

});
