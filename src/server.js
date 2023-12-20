import { Server } from 'miragejs';
import mockData from './mockData';

new Server({
  routes() {
    this.namespace = '/api';  // Define a namespace if your real API has one

    this.get('/shopping-lists', () => { // Removed '/api' from the route path
      return mockData.shoppingLists;
    });

    // Add POST, PUT, DELETE handlers as needed
    this.post('/shopping-lists', (schema, request) => {
      // Logic to add a new shopping list
    });

    this.put('/shopping-lists/:id', (schema, request) => {
      // Logic to update a shopping list
    });

    this.delete('/shopping-lists/:id', (schema, request) => {
      // Logic to delete a shopping list
    });

    // Any other routes...
  },
});
