import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  address: belongsTo(),
  people: hasMany()
});
