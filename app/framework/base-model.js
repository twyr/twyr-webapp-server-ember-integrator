import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
	createdAt: DS.attr('date', { defaultValue() { return new Date(); } }),
	updatedAt: DS.attr('date', { defaultValue() { return new Date(); } }),

	formattedCreatedAt: computed('createdAt', {
		get() {
			return window.moment(this.get('createdAt')).format('DD/MMM/YYYY hh:mm A');
		}
	}).readOnly(),

	formattedUpdatedAt: computed('updatedAt', {
		get() {
			return window.moment(this.get('updatedAt')).format('DD/MMM/YYYY hh:mm A');
		}
	}).readOnly()
});
