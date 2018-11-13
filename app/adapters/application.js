import DS from 'ember-data';
import AdaptersUuidMixin from 'ember-cli-uuid/mixins/adapters/uuid';
import AjaxServiceSupport from 'ember-ajax/mixins/ajax-support';

export default DS.JSONAPIAdapter.extend(AdaptersUuidMixin, AjaxServiceSupport, {
});
