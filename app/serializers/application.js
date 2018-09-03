import String from 'ember';
import DS from 'ember-data';
import KeepOnlyChanged from 'ember-data-change-tracker/mixins/keep-only-changed';

export default DS.JSONAPISerializer.extend(KeepOnlyChanged, {
	keyForAttribute(attr) {
		return String.underscore(attr);
	},

	keyForLink(attr) {
		return String.underscore(attr);
	},

	keyForRelationship(attr) {
		return String.underscore(attr);
	}
});
