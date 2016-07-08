import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title() { return `${faker.hacker.ingverb()} ${faker.hacker.noun()} ${faker.hacker.noun()}`;},
  description() { return  faker.lorem.paragraph(); },
  attendeeCount() { return Math.floor((Math.random() * 30) + 1);}
});
