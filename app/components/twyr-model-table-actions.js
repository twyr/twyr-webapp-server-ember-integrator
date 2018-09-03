/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
/* eslint-disable ember/closure-actions */

import BaseComponent from '../framework/base-component';

export default BaseComponent.extend({
	'view': function(record) {
		if(this.get('callbacks.viewAction')) {
			// this.sendAction('controller-action', this.get('callbacks.viewAction'), record);
			return true;
		}

		if(this.get('callbacks.viewTask')) {
			this.get('callbacks.viewTask').perform(record);
			return true;
		}

		return false;
	},

	'edit': function(record) {
		if(this.get('inlineEditEnabled')) {
			this.get('editRow')();
			return true;
		}

		if(this.get('callbacks.editAction')) {
			// this.sendAction('controller-action', this.get('callbacks.editAction'), record);
			return true;
		}

		if(this.get('callbacks.editTask')) {
			this.get('callbacks.editTask').perform(record);
			return true;
		}

		return false;
	},

	'save': function(record) {
		if(this.get('inlineEditEnabled')) {
			this.get('saveRow')();
		}

		if(this.get('callbacks.saveAction')) {
			// this.sendAction('controller-action', this.get('callbacks.saveAction'), record);
			return true;
		}

		if(this.get('callbacks.saveTask')) {
			this.get('callbacks.saveTask').perform(record);
			return true;
		}

		return false;
	},

	'cancel': function(record) {
		if(this.get('inlineEditEnabled')) {
			this.get('cancelEditRow')();
		}

		if(this.get('callbacks.cancelAction')) {
			// this.sendAction('controller-action', this.get('callbacks.cancelAction'), record);
			return true;
		}

		if(this.get('callbacks.cancelTask')) {
			this.get('callbacks.cancelTask').perform(record);
			return true;
		}

		return false;
	},

	'delete': function(record) {
		if(this.get('callbacks.deleteAction')) {
			// this.sendAction('controller-action', this.get('callbacks.deleteAction'), record);
			return true;
		}

		if(this.get('callbacks.deleteTask')) {
			this.get('callbacks.deleteTask').perform(record);
			return true;
		}

		return false;
	},

	'actions': {
		'collapseRow': function(index, record) {
			this.get('collapseRow')(index, record);
		},

		'expandRow': function(index, record) {
			this.get('expandRow')(index, record);
		}

	}
});
