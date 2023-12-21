import { Server } from 'miragejs';
import mShoppingLists from './mockData';

new Server({
  routes() {
    this.namespace = '';  // Define a namespace if your real API has one

    this.get('/shopping-lists', () => {
      return mShoppingLists;
    });

    // Add a new shopping list
    this.post('/shopping-lists', (schema, request) => {
      const requestBody = JSON.parse(request.requestBody);
      const newShoppingList = {
        id: mShoppingLists.length + 1, // Generate a new unique ID
        name: requestBody.name,
        description: requestBody.description,
        items: [], // Initialize with an empty array of items
        archived: false, // Set archived state to false by default
      };

      mShoppingLists.push(newShoppingList);

      return { shoppingList: newShoppingList };
    });

    // Update the archived state of a shopping list
    this.put('/shopping-lists/:id/archive', (schema, request) => {
      const id = request.params.id;
      const shoppingList = mShoppingLists.find((list) => list.id === parseInt(id));

      if (!shoppingList) {
        return { error: 'Shopping list not found' };
      }

      shoppingList.archived = true; // Change the archived state to true

      return { shoppingList };
    });

    // Delete a shopping list
    this.delete('/shopping-lists/:id', (schema, request) => {
      const id = request.params.id;
      const shoppingListIndex = mShoppingLists.findIndex((list) => list.id === parseInt(id));

      if (shoppingListIndex === -1) {
        return { error: 'Shopping list not found' };
      }

      // Remove the shopping list from the array
      mShoppingLists.splice(shoppingListIndex, 1);

      return { success: true };
    });

    // Any other routes...
  },
});
