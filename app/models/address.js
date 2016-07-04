import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';
// import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  event: belongsTo('event'),
  street1: attr('string'),
  street2: attr('string'),
  city: attr('string'),
  state: attr('string'),
  zip: attr('string')
});
