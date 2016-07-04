import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('event', 'Unit | Model | event', {
  // Specify the other units that are required for this test.
  needs: ['model:address']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

test('event belongsTo address', function(assert) {
  let eventModel = this.store().modelFor('event');
  let address    = Ember.get(eventModel, 'relationshipsByName').get('address');

  assert.equal(address.key, 'address');
  assert.equal(address.kind, 'belongsTo');
});
