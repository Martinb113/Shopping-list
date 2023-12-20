// shoppingListService.js

// Import your initial mock data
import mockData from './mockData';

// Function to add a new shopping list
export function addShoppingList(newList) {
  // Simulate adding a new shopping list
  const updatedMockData = { ...mockData };
  newList.id = updatedMockData.shoppingLists.length + 1; // Generate a new unique ID
  newList.archived = false; // Set archived state to false by default
  updatedMockData.shoppingLists.push(newList);
  return updatedMockData;
}

// Function to archive a shopping list
export function archiveShoppingList(listId) {
  // Simulate archiving a shopping list
  const updatedMockData = { ...mockData };
  const listIndex = updatedMockData.shoppingLists.findIndex(list => list.id === listId);
  if (listIndex !== -1) {
    updatedMockData.shoppingLists[listIndex].archived = true;
  }
  return updatedMockData;
}
