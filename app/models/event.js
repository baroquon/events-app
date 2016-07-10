import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';
import Ember from 'ember';

export default Model.extend({
  title: attr('string'),
  description: attr('string'),
  address: belongsTo('address'),
  people: hasMany('person'),

  attendeeCount: Ember.computed('people', function(){
    let people = this.get('people');
    return people.get('length');
  })
});
