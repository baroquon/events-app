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
      assert.equal($('article h3').text().trim(), "Choose an event on the left to see details");
      assert.equal($('aside ul li').length, 3);
    });
  });
});
