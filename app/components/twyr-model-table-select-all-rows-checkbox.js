import BaseComponent from '../framework/base-component';

export default BaseComponent.extend({
	actions: {
		toggleAllSelection() {
			this.get('toggleAllSelection')();
		}
	}
});
