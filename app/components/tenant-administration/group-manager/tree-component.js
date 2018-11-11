import BaseComponent from '../../../framework/base-component';

import { observer } from '@ember/object';
import { task } from 'ember-concurrency';

export default BaseComponent.extend({
	init() {
		this._super(...arguments);
		this.set('permissions', ['group-manager-read']);
	},

	didInsertElement() {
		this._super(...arguments);

		const moduTree = this.$('div#tenant-administration-group-manager-tree-container').jstree({
			'core': {
				'check_callback': function(operation) {
					return (operation !== 'move_node');
				},

				'multiple': false,

				'themes': {
					'name': 'default',
					'icons': false,
					'dots': false,
					'responsive': true
				},

				'data': {
					'url': '/tenant-administration/group-manager/tree',
					'dataType': 'json',
					'data': function(node) {
						return { 'id': node.id };
					}
				}
			},

			'plugins': ['sort', 'unique'],
		});

		moduTree.on('ready.jstree', () => {
			const rootNodeId = this.$('div#tenant-administration-group-manager-tree-container > ul > li:first-child').attr('id');

			this.$('div#tenant-administration-group-manager-tree-container').jstree('open_node', rootNodeId);
			this.$('div#tenant-administration-group-manager-tree-container').jstree('activate_node', rootNodeId, false, false);
		});

		moduTree.on('activate_node.jstree', (event, data) => {
			this.get('onActivateNode').perform(data.node);
		});
	},

	willDestroyElement() {
		this.invokeAction('controller-action', 'setSelectedGroup', null);
		this.$('div#tenant-administration-group-manager-tree-container').jstree('destroy', true);

		this._super(...arguments);
	},

	onActivateNode: task(function* (treeNode) {
		try {
			let tenantGroup = yield this.get('model');
			if(tenantGroup && (tenantGroup.get('id') === treeNode.id))
				return;

			const store = this.get('store');
			tenantGroup = store.peekRecord('tenant-administration/group-manager/tenant-group', treeNode.id);
			if(!tenantGroup) {
				tenantGroup = yield store.findRecord('tenant-administration/group-manager/tenant-group', treeNode.id, {
					'include': 'parent, groups'
				});
			}

			this.$('div#tenant-administration-group-manager-tree-container').jstree('open_node', treeNode.id);
			this.invokeAction('controller-action', 'setSelectedGroup', tenantGroup);
		}
		catch(err) {
			this.get('notification').display({
				'type': 'error',
				'error': err
			});
		}
	}).keepLatest(),

	onSelectedGroupChanged: observer('model', function() {
		if(!this.get('model'))
			return;

		if(this.$('div#tenant-administration-group-manager-tree-container').jstree('get_selected')[0] === this.get('model.id'))
			return;

		this.$('div#tenant-administration-group-manager-tree-container').jstree('activate_node', this.get('model.id'), false, false);
		this.$('div#tenant-administration-group-manager-tree-container').jstree('open_node', this.get('model.id'));
	}),

	onSelectedGroupNameChanged: observer('model.displayName', function() {
		const treeNode = this.$('div#tenant-administration-group-manager-tree-container').jstree('get_node', this.get('model.id'));
		this.$('div#tenant-administration-group-manager-tree-container').jstree('rename_node', treeNode, this.get('model.displayName'));
	}),

	onSelectedGroupDestroyed: observer('model.isDeleted', 'model.hasDirtyAttributes', function() {
		if(!this.get('model.isDeleted')) return;

		const treeNode = this.$('div#tenant-administration-group-manager-tree-container').jstree('get_node', this.get('model.id'));
		this.$('div#tenant-administration-group-manager-tree-container').jstree('delete_node', treeNode);
	})
});
