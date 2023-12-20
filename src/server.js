import { Server } from 'miragejs';
import mockData from './mockData'; // Ensure this matches the default export from mockData.js

if (process.env.REACT_APP_USE_MOCK_DATA === 'true') {
  new Server({
    routes() {
      this.namespace = 'api'; // Optional: Set a namespace for your mock API if needed

      this.get('/shopping-lists', () => {
        console.log('Fetching shopping lists from mock server');
        return mockData.shoppingLists; // Ensure the mockData has a shoppingLists property
      });

      // Define other routes as needed
    },
  });
}