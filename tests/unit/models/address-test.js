import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('address', 'Unit | Model | address', {
  // Specify the other units that are required for this test.
  needs: ['model:event']
});

test('it exists', function(assert) {
  let model = this.subject();
  //let store = this.store();

  assert.ok(!!model);
});

test('address belongsTo event', function(assert) {
  let address     = this.store().modelFor('address');
  let eventModel  = Ember.get(address, 'relationshipsByName').get('event');

  assert.equal(eventModel.key, 'event');
  assert.equal(eventModel.kind, 'belongsTo');
});
