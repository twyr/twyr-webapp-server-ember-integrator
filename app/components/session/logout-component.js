import BaseComponent from '../../framework/base-component';
import { task } from 'ember-concurrency';

export default BaseComponent.extend({
	permissions: null,

	onInit: task(function* () {
		yield this.set('permissions', ['registered']);
	}).on('init').drop()
});
