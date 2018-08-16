import String from 'ember';
import DS from 'ember-data';
import KeepOnlyChanged from 'ember-data-change-tracker/mixins/keep-only-changed';

export default DS.JSONAPISerializer.extend(KeepOnlyChanged, {
	'keyForAttribute': function(attr) {
		return String.underscore(attr);
	},

	'keyForLink': function(attr) {
		return String.underscore(attr);
	},

	'keyForRelationship': function(attr) {
		return String.underscore(attr);
	}
});
