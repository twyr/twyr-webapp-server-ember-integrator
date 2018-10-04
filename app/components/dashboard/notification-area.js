import BaseComponent from '../../framework/base-component';

export default BaseComponent.extend({
	init() {
		this._super(...arguments);
		this.set('permissions', ['registered']);
	}
});
