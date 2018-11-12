import BaseComponent from '../../framework/base-component';

import computedStyle from 'ember-computed-style';
import env from 'twyr-webapp-server/config/environment';

import { computed } from '@ember/object';
import { observer } from '@ember/object';


export default BaseComponent.extend({
	tagName: 'md-content',
	classNames: ['mr-4', 'md-default-theme'],

	attributeBindings: ['style'],
	style: computedStyle('display'),

	currentTenant: null,
	allowedTenants: null,

	'display': computed('allowedTenants', 'hasPermission', function() {
		return {
			'background-color': 'transparent',
			'display': ((this.get('hasPermission') && this.get('allowedTenants') && (this.get('allowedTenants.length') > 1)) ? 'block' : 'none')
		};
	}),

	init() {
		this._super(...arguments);
		this.set('permissions', ['registered']);

		this.get('currentUser').on('userDataUpdated', this, 'onAllowedTenantsUpdated');
	},

	destroy() {
		this.get('currentUser').off('userDataUpdated', this, 'onAllowedTenantsUpdated');
		this._super(...arguments);
	},

	didInsertElement() {
		this._super(...arguments);

		this.$('md-select').css('background-color', 'transparent');
		this.$('div.md-errors-spacer').css('display', 'none');

		this.$('span.ember-power-select-selected-item').css('color', 'white');
		this.$('span.md-select-icon').css('color', 'white');
	},

	'onHasPermissionChange': observer('hasPermission', function() {
		this.onAllowedTenantsUpdated();
	}),

	onAllowedTenantsUpdated() {
		if(!this.get('hasPermission')) {
			this.set('allowedTenants', null);
			this.set('currentTenant', null);

			return;
		}

		const userDetails = this.get('currentUser').getUser();
		if(!userDetails) {
			this.set('allowedTenants', null);
			this.set('currentTenant', null);

			return;
		}

		this.set('allowedTenants', (userDetails['otherTenants'] || null));
	},

	'onAllowedTenantsChange': observer('allowedTenants', function() {
		if(!this.get('allowedTenants')) {
			this.set('currentTenant', null);
			return;
		}

		if(this.get('allowedTenants.length') < 1) {
			this.set('currentTenant', null);
			return;
		}

		const currentTenant = this.get('allowedTenants').filter((allowedTenant) => {
			return allowedTenant['tenant_id'] === window.twyrTenantId;
		})[0];

		this.set('currentTenant', currentTenant);
	}),

	changeTenant(newTenant) {
		this.$('span.ember-power-select-selected-item').css('color', 'white');
		if(newTenant['tenant_id'] === window.twyrTenantId) return;

		const currentSubDomain = window.location.hostname.replace(env.twyr.domain, '');
		const newHref = window.location.href.replace(currentSubDomain, newTenant['sub_domain']);

		window.location.href = newHref;
	}
});
