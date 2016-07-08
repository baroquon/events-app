import { test } from 'qunit';
import moduleForAcceptance from 'events-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | events');

test('visiting / and clicking events takes us to the events page.', function(assert) {
  let addresses = server.createList('address', 3);

  addresses.forEach((address) => {
    server.create('event', { address });
  });

  visit('/');

  andThen(function() {
    click('a[href="/events"]');
    andThen(function() {
      assert.equal(currentURL(), '/events');
      // This is the text that is in the events/index template - it should display if we have not selected an event
      assert.equal($('article h3').text().trim(), "Choose an event on the left to see details");
      assert.equal($('aside ul li').length, 3);
    });
  });
});

test('visiting events and clicking an event takes us to that event page.', function(assert) {
  let addresses = server.createList('address', 3);

  addresses.forEach((address) => {
    server.create('event', { address });
  });

  visit('/events');

  andThen(function() {
    click('aside ul li:first-child a');
    andThen(function() {
      assert.equal(currentURL(), '/events/1');
    });
  });
});
