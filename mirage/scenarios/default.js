export default function(server) {
  let addresses = server.createList('address', 10);

  addresses.forEach((address) => {
    let people = server.createList('person', Math.floor((Math.random() * 30) + 1));
    server.create('event', { address,  people});
  });
}
