import { Factory, faker, belongsTo } from 'ember-cli-mirage';

export default Factory.extend({
  street1() { return  faker.address.streetAddress(); },
  street2() { return  faker.address.secondaryAddress(); },
  city() { return  faker.address.city(); },
  state() { return  faker.address.stateAbbr(); },
  zip() { return  faker.address.zipCode(); }
});
