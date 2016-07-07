import { Factory, faker, belongsTo } from 'ember-cli-mirage';

export default Factory.extend({
  title(i) { return `Event ${i + 1}`;},
  description(i) { return  faker.lorem.paragraph(); },
  attendeeCount(i) { return Math.floor((Math.random() * 30) + 1);}
});
