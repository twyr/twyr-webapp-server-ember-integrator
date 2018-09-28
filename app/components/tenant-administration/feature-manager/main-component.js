import BaseComponent from '../../../framework/base-component';
import { task } from 'ember-concurrency';

export default BaseComponent.extend({
	changeSelectedFeature: task(function* (feature) {
		const store = this.get('store');

		const loadedFeatureModels = yield store.peekAll('tenant-administration/feature-manager/tenant-feature');

		const featureModel = loadedFeatureModels.filter((loadedFeatureModel) => {
			return loadedFeatureModel.get('feature.id') === feature.get('id')
		});

		this.invokeAction('controller-action', 'setSelectedFeature', featureModel.shift());
	}).keepLatest()
});
