export default function() {
  this.namespace = 'api';

  this.get('/events', (schema) => {
    return schema.events.all();
  });
  this.get('/events/:id', (schema, request) => {
    return schema.events.find(request.params.id);
  });

  this.get('/addresses', (schema) => {
    return schema.addresses.all();
  });
  this.get('/addresses/:id', (schema, request) => {
    return schema.addresses.find(request.params.id);
  });
  this.get('/people', (schema) => {
    return schema.people.all();
  });
  this.get('/people/:id', (schema, request) => {
    return schema.people.find(request.params.id);
  });
}
