import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | tenant-administration/features', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:tenant-administration/features');
    assert.ok(route);
  });
});
