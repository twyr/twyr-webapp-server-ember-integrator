import BaseComponent from '../../framework/base-component';

import computedStyle from 'ember-computed-style';
import { computed } from '@ember/object';
import { observer } from '@ember/object';
import { task } from 'ember-concurrency';

export default BaseComponent.extend({
	attributeBindings: ['style'],
	style: computedStyle('display'),

	permissions: null,
	displayName: '',

	display: computed('hasPermission', function() {
		return { 'display': (this.get('hasPermission') ? 'unset' : 'none') };
	}),

	onInit: task(function* () {
		yield this.set('permissions', ['registered']);
	}).on('init').keepLatest(),

	onHasPermissionChange: observer('hasPermission', function() {
		const userDetails = this.get('currentUser').getUser();
		this.set('displayName', (userDetails ? userDetails['name'] : ''));
	}),
});
