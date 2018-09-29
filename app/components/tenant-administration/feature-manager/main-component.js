import BaseComponent from '../../../framework/base-component';

export default BaseComponent.extend({
	didInsertElement() {
		this._super(...arguments);
		this.$('div.md-subheader-inner').addClass('pb-0');
	},

	changeSelectedFeature(feature) {
		this.invokeAction('controller-action', 'setSelectedFeature', feature);
	}
});
