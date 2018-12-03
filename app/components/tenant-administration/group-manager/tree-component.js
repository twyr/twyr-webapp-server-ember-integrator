import BaseComponent from '../../../framework/base-component';

import { observer } from '@ember/object';
import { once } from '@ember/runloop';
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

	'onActivateNode': task(function* (treeNode) {
		try {
			let tenantGroup = yield this.get('selectedGroup');
			if(tenantGroup && (tenantGroup.get('id') === treeNode.id))
				return;

			const store = this.get('store');
			tenantGroup = store.peekRecord('tenant-administration/group-manager/tenant-group', treeNode.id);
			if(!tenantGroup) {
				tenantGroup = yield store.findRecord('tenant-administration/group-manager/tenant-group', treeNode.id, {
					'include': 'tenant, parent, groups, tenantUserGroups, permissions, permissions.tenant, permissions.group, permissions.featurePermission'
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

	'onSelectedGroupChanged': observer('selectedGroup', function() {
		if(!this.get('selectedGroup'))
			return;

		if(this.$('div#tenant-administration-group-manager-tree-container').jstree('get_selected')[0] === this.get('selectedGroup.id'))
			return;

		const treeNode = this.$('div#tenant-administration-group-manager-tree-container').jstree('get_node', this.get('selectedGroup.id'));
		if(treeNode) {
			this.$('div#tenant-administration-group-manager-tree-container').jstree('activate_node', this.get('selectedGroup.id'), false, false);
			this.$('div#tenant-administration-group-manager-tree-container').jstree('open_node', this.get('selectedGroup.id'));

			return;
		}

		const parentNode = this.$('div#tenant-administration-group-manager-tree-container').jstree('get_node', this.get('selectedGroup.parent.id'));
		this.$('div#tenant-administration-group-manager-tree-container').one('refresh_node.jstree', () => {
			this.$('div#tenant-administration-group-manager-tree-container').jstree('activate_node', this.get('selectedGroup.id'), false, false);
			this.$('div#tenant-administration-group-manager-tree-container').jstree('open_node', this.get('selectedGroup.id'));
		});

		this.$('div#tenant-administration-group-manager-tree-container').jstree('refresh_node', parentNode);
	}),

	'onSelectedGroupNameChanged': observer('selectedGroup.displayName', function() {
		const treeNode = this.$('div#tenant-administration-group-manager-tree-container').jstree('get_node', this.get('selectedGroup.id'));
		this.$('div#tenant-administration-group-manager-tree-container').jstree('rename_node', treeNode, this.get('selectedGroup.displayName'));
	}),

	'onSelectedGroupDestroyed': observer('selectedGroup.isDeleted', 'selectedGroup.hasDirtyAttributes', function() {
		once(this, 'processGroupDeletion');
	}),

	'processGroupDeletion': function() {
		if(this.get('selectedGroup.isDeleted')) {
			if(this.get('selectedGroup.hasDirtyAttributes')) return;

			const treeNode = this.$('div#tenant-administration-group-manager-tree-container').jstree('get_node', this.get('selectedGroup.id'));
			this.$('div#tenant-administration-group-manager-tree-container').jstree('delete_node', treeNode);
		}
		else {
			const treeNode = this.$('div#tenant-administration-group-manager-tree-container').jstree('get_node', this.get('selectedGroup.id'));
			if(treeNode) return;

			const parentNode = this.$('div#tenant-administration-group-manager-tree-container').jstree('get_node', this.get('selectedGroup.parent.id'));
			this.$('div#tenant-administration-group-manager-tree-container').jstree('refresh_node', parentNode);
		}
	},

	'onTenantGroupNameChanged': observer('model.groups.@each.displayName', function() {
		this.get('_updateChildGroupText').perform();
	}),

	'_updateChildGroupText': task(function* () {
		const tenantGroups = yield this.get('selectedGroup.groups');
		if(!tenantGroups) return;

		tenantGroups.forEach((subGroup) => {
			const treeNode = this.$('div#tenant-administration-group-manager-tree-container').jstree('get_node', subGroup.get('id'));
			if(!treeNode) return;

			this.$('div#tenant-administration-group-manager-tree-container').jstree('rename_node', treeNode, subGroup.get('displayName'));
		});
	}).enqueue(),

	'onTenantGroupsChanged': observer('model.groups.@each.isNew', 'model.groups.@each.isDeleted', function() {
		once(this, () => {
			// console.log(`Firing observer for 'model.groups.@each.isNew' OR 'model.groups.@each.isDeleted'`);
			this.get('_updateGroupTree').perform();
		});
	}),

	'_updateGroupTree': task(function* () {
		const tenantGroups = yield this.get('selectedGroup.groups');

		if(tenantGroups)
		tenantGroups.forEach((subGroup) => {
			let treeNode = this.$('div#tenant-administration-group-manager-tree-container').jstree('get_node', subGroup.get('id'));

			if(subGroup.get('isNew') && !treeNode) {
				treeNode = this.$('div#tenant-administration-group-manager-tree-container').jstree('create_node', subGroup.get('parent.id'), {
					'id': subGroup.get('id'),
					'text': subGroup.get('displayName')
				});
			}
		});

		const selectedTreeNodeId = this.$('div#tenant-administration-group-manager-tree-container').jstree('get_selected')[0];
		const selectedTreeNodeChildren = this.$('div#tenant-administration-group-manager-tree-container').jstree('get_children_dom', selectedTreeNodeId);

		for(let idx = 0; idx < selectedTreeNodeChildren.length; idx++) {
			const tenantGroup = this.get('store').peekRecord('tenant-administration/group-manager/tenant-group', window.$(selectedTreeNodeChildren[idx]).attr('id'));
			if(tenantGroup && !tenantGroup.get('isDeleted'))
				continue;

			this.$('div#tenant-administration-group-manager-tree-container').jstree('delete_node', window.$(selectedTreeNodeChildren[idx]).attr('id'));
		}
	}).enqueue()
});
