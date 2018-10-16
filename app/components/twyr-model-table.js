/* eslint-disable require-yield */

import BaseComponent from './../framework/base-component';
import Bootstrap4Theme from './../themes/bootstrap4';

import { InvokeActionMixin } from 'ember-invoke-action';
import { task } from 'ember-concurrency';


export default BaseComponent.extend(InvokeActionMixin, {
	themeInstance: null,
	_messages: null,
	_customIcons: null,

	init() {
		this.set('_messages', {
			searchLabel: 'Filter: ',
			tableSummary: 'Showing %@ - %@ of %@'
		});

		this.set('_customIcons', {
			'sort-asc': 'fas fa-sort-up',
			'sort-desc': 'fas fa-sort-down'
		});

		this._super(...arguments);
	},

	onWillInsertElement: task(function* () {
		const mergedMessages = Object.assign({}, this.get('_messages'), (this.get('messages') || {}));

		this.set('themeInstance', Bootstrap4Theme.create({
			'table': 'table table-hover table-condensed',
			'globalFilterWrapper': 'float-right',

			'messages': mergedMessages
		}));

		if(!this.get('editEnabled') && !this.get('inlineEditEnabled'))
			return;

		const modelTableActionsAdded = this.get('columns').filter((columnDef) => {
			return columnDef.component === 'twyrModelTableActions';
		}).length;

		if(modelTableActionsAdded)
			return;

		this.get('columns').push({
			'title': '',
			'component': 'twyrModelTableActions',
			'mayBeHidden': false,
			'editable': false
		})

	}).drop().on('willInsertElement'),

	onDidInsertElement: task(function* () {
		if(!this.get('createEnabled'))
			return;

		if(!(this.get('callbacks.addAction') || this.get('callbacks.addTask')))
			return;

		const createButton = window.$('<button type="button" class="md-default-theme md-button md-primary md-raised"></button>');
		createButton.html(
`
<md-icon md-font-icon="add" aria-label="add" class="m-0 paper-icon md-font material-icons md-default-theme ember-view">add</md-icon>
<span>Add</span>
<div class="md-ripple-container" style=""></div>
`
		);

		createButton.on('click', () => {
			if(this.get('callbacks.addAction')) {
				this.invokeAction('controller-action', this.get('callbacks.addAction'));
				return;
			}

			if(this.get('callbacks.addTask')) {
				this.get('callbacks.addTask').perform();
			}
		});

		const lastHeaderColumn = window.$(this.$('table thead tr:first-child th:last-child')[0]);
		lastHeaderColumn.addClass('text-right');
		lastHeaderColumn.html(createButton);
	}).drop().on('didInsertElement'),

	onWillDestroyElement: task(function* () {
		const createButton = window.$(this.$('table thead tr:first-child th:last-child button.md-button.md-primary')[0]);
		createButton.off('click');
	}).drop().on('willDestroyElement'),

	displayDataChanged(displayChangedData) {
		if(this.get('callbacks.displayDataChangedAction')) {
			this.invokeAction('controller-action', this.get('callbacks.displayDataChangedAction'), displayChangedData);
			return true;
		}

		if(this.get('callbacks.displayDataChangedTask')) {
			this.get('callbacks.displayDataChangedTask').perform(displayChangedData);
			return true;
		}
	}
});
