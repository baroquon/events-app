import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    let address1 = { street1: '123 Corner St', street2: 'Suite 2', city: 'Birmingham', state: 'AL', zip: '35209'};
    let address2 = { street1: '534 Jamestown Rd', street2: 'Suite 54', city: 'Chicago', state: 'IL', zip: '60029'};
    let address3 = { street1: '153 20th St S.', street2: 'Suite 9', city: 'Birmingham', state: 'AL', zip: '35206'};
    //return this.store.findAll('event');
    return [
      {id: 1, title: 'Boss Event', description: 'This is an event for bosses only.', attendeeCount: 2, address: address1},
      {id: 2, title: 'Pretty Cool Event', description: 'This is the coolest event in the world and the cools.', attendeeCount: 542, address: address2},
      {id: 3, title: 'A Crappy Event', description: 'This is the worst event no one should go.', attendeeCount: 1, address: address3 }
    ];
  }
});
