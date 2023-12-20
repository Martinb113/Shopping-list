import { Server } from 'miragejs';
import { MOCK_DATA } from './mockData';

if (process.env.REACT_APP_USE_MOCK_DATA === 'true') {
  new Server({
    routes() {
      this.get('/shopping-lists', () => {
        return MOCK_DATA.shoppingLists;
      });

      // Add other routes as needed.
    },
  });
}