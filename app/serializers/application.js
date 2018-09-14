import DS from 'ember-data';
import KeepOnlyChanged from 'ember-data-change-tracker/mixins/keep-only-changed';

export default DS.JSONAPISerializer.extend(KeepOnlyChanged, {
	keyForAttribute(attr) {
		return Ember.String.underscore(attr);
	},

	keyForLink(attr) {
		return Ember.String.underscore(attr);
	},

	keyForRelationship(attr) {
		return Ember.String.underscore(attr);
	}
});
