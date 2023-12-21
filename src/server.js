import { Server } from 'miragejs';
import mockData from './mockData';

new Server({
  routes() {
    this.namespace = '/api';  // Define a namespace if your real API has one

    this.get('/API/shopping-lists', () => {
      return mockData.shoppingLists;
    });

    // Add a new shopping list
    this.post('/API/shopping-lists', (schema, request) => {
      const requestBody = JSON.parse(request.requestBody);
      const newShoppingList = {
        id: mockData.shoppingLists.length + 1, // Generate a new unique ID
        name: requestBody.name,
        description: requestBody.description,
        items: [], // Initialize with an empty array of items
        archived: false, // Set archived state to false by default
      };

      mockData.shoppingLists.push(newShoppingList);

      return { shoppingList: newShoppingList };
    });

    // Update the archived state of a shopping list
    this.put('/API/shopping-lists/:id/archive', (schema, request) => {
      const id = request.params.id;
      const shoppingList = mockData.shoppingLists.find((list) => list.id === parseInt(id));

      if (!shoppingList) {
        return { error: 'Shopping list not found' };
      }

      shoppingList.archived = true; // Change the archived state to true

      return { shoppingList };
    });

    // Delete a shopping list
    this.delete('/API/shopping-lists/:id', (schema, request) => {
      const id = request.params.id;
      const shoppingListIndex = mockData.shoppingLists.findIndex((list) => list.id === parseInt(id));

      if (shoppingListIndex === -1) {
        return { error: 'Shopping list not found' };
      }

      // Remove the shopping list from the array
      mockData.shoppingLists.splice(shoppingListIndex, 1);

      return { success: true };
    });

    // Any other routes...
  },
});
