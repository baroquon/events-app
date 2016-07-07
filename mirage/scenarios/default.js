export default function(server) {
  let addresses = server.createList('address', 10);

  addresses.forEach((address) => {
    server.create('event', { address });
  });
}
