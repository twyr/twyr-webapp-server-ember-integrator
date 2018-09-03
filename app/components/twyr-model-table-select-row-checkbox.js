import BaseComponent from '../framework/base-component';

export default BaseComponent.extend({
	actions: {
		clickOnRow(index, record, event) {
			this.get('clickOnRow')(index, record);
			event.stopPropagation();
		}
	}
});
