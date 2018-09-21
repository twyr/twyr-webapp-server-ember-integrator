import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | tenant-administration', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:tenant-administration');
    assert.ok(route);
  });
});
