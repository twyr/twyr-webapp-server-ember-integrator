import BaseController from '../framework/base-controller';

export default BaseController.extend({
	init() {
		this._super(...arguments);
		this.set('permissions', ['registered']);
	}
});
