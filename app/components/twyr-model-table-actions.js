import BaseComponent from '../framework/base-component';

import { InvokeActionMixin } from 'ember-invoke-action';

export default BaseComponent.extend(InvokeActionMixin, {
	view(record) {
		if(this.get('callbacks.viewAction')) {
			this.invokeAction('controller-action', this.get('callbacks.viewAction'), record);
			return true;
		}

		if(this.get('callbacks.viewTask')) {
			this.get('callbacks.viewTask').perform(record);
			return true;
		}

		return false;
	},

	edit(record) {
		if(this.get('inlineEditEnabled')) {
			this.get('editRow')();
			return true;
		}

		if(this.get('callbacks.editAction')) {
			this.invokeAction('controller-action', this.get('callbacks.editAction'), record);
			return true;
		}

		if(this.get('callbacks.editTask')) {
			this.get('callbacks.editTask').perform(record);
			return true;
		}

		return false;
	},

	save(record) {
		if(this.get('inlineEditEnabled')) {
			this.get('saveRow')();
		}

		if(this.get('callbacks.saveAction')) {
			this.invokeAction('controller-action', this.get('callbacks.saveAction'), record);
			return true;
		}

		if(this.get('callbacks.saveTask')) {
			this.get('callbacks.saveTask').perform(record);
			return true;
		}

		return false;
	},

	cancel(record) {
		if(this.get('inlineEditEnabled')) {
			this.get('cancelEditRow')();
		}

		if(this.get('callbacks.cancelAction')) {
			this.invokeAction('controller-action', this.get('callbacks.cancelAction'), record);
			return true;
		}

		if(this.get('callbacks.cancelTask')) {
			this.get('callbacks.cancelTask').perform(record);
			return true;
		}

		return false;
	},

	delete(record) {
		if(this.get('callbacks.deleteAction')) {
			this.invokeAction('controller-action', this.get('callbacks.deleteAction'), record);
			return true;
		}

		if(this.get('callbacks.deleteTask')) {
			this.get('callbacks.deleteTask').perform(record);
			return true;
		}

		return false;
	},

	actions: {
		collapseRow(index, record) {
			this.get('collapseRow')(index, record);
		},

		expandRow(index, record) {
			this.get('expandRow')(index, record);
		}

	}
});
