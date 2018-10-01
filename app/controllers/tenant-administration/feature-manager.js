import BaseController from '../../framework/base-controller';

export default BaseController.extend({
	setSelectedFeature(featureModel) {
		this.set('model', featureModel);
	}
});
