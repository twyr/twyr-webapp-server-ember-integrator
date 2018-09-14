import DS from 'ember-data';

import { inject } from '@ember/service';

import _moment from 'ember-moment/computeds/moment';
import format from 'ember-moment/computeds/format';
import locale from 'ember-moment/computeds/locale';


export default DS.Model.extend({
	moment: inject('moment'),

	createdAt: DS.attr('date', {
		defaultValue() {
			return new Date();
		}
	}),

	updatedAt: DS.attr('date', {
		defaultValue() {
			return new Date();
		}
	}),

	formattedCreatedAt: format(
		locale(
			_moment('createdAt'),
			'moment.locale'
		),
		'DD/MMM/YYYY hh:mm A'
	),

	formattedUpdatedAt: format(
		locale(
			_moment('updatedAt'),
			'moment.locale'
		),
		'DD/MMM/YYYY hh:mm A'
	)
});
