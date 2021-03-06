import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';
// import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  type: attr('string'),
  title: attr('string'),
  description: attr('string'),
  address: belongsTo('address'),
  attendeeCount: attr('number')
});
