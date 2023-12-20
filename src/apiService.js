import MOCK_SHOPPING_LISTS from './mockData';


export const fetchShoppingLists = async () => {
    // Simulate a server response delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return MOCK_SHOPPING_LISTS;
  };
  
  export const deleteShoppingList = async (id) => {
    // Filter out the list with the given id
    const updatedLists = MOCK_SHOPPING_LISTS.filter(list => list.id !== id);
    // Update your mock data variable
    MOCK_SHOPPING_LISTS.length = 0; // Clear the array
    MOCK_SHOPPING_LISTS.push(...updatedLists); // Push the updated lists back in
  };
  
  export const archiveShoppingList = async (id) => {
    // Simulate archiving in the mock data
    const list = MOCK_SHOPPING_LISTS.find(list => list.id === id);
    list.archived = true;
    return list; // Return the updated list
  };