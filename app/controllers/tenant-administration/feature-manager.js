import BaseController from '../../framework/base-controller';

export default BaseController.extend({
	'breadcrumbStack': null,

	init() {
		this._super(...arguments);
		this.set('permissions', ['feature-manager-read']);
	},

	setSelectedFeature(featureModel) {
		this.set('model', featureModel);


		let currentFeature = featureModel;
		const breadcrumbHierarchy = [];

		while(currentFeature) {
			if(currentFeature.get('path')) breadcrumbHierarchy.unshift(currentFeature);
			currentFeature = currentFeature.get('parent');
		}

		this.set('breadcrumbStack', breadcrumbHierarchy);
	}
});
