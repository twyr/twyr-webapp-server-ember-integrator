import DS from 'ember-data';
// import KeepOnlyChanged from 'ember-data-change-tracker/mixins/keep-only-changed';

import { underscore } from '@ember/string';

export default DS.JSONAPISerializer.extend({
	keyForAttribute(attr) {
		return underscore(attr);
	},

	keyForLink(attr) {
		return underscore(attr);
	},

	keyForRelationship(attr) {
		return underscore(attr);
	}
});
