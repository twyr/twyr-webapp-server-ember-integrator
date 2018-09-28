import BaseController from '../../framework/base-controller';

export default BaseController.extend({
	selectedFeature: null,

	setSelectedFeature(featureModel) {
		this.set('selectedFeature', featureModel);
	}
});
