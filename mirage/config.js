export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = 'api';    // make this `api`, for example, if your API is namespaced
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
}
