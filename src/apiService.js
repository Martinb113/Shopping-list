let MOCK_SHOPPING_LISTS = require('./mockData').default;

export const fetchShoppingLists = async () => {
  if (process.env.REACT_APP_USE_MOCK_DATA === 'true') {
    // Return mock data directly
    return MOCK_SHOPPING_LISTS;
  } else {
    // Fetch from the real API
    const response = await fetch('/api/shopping-lists'); // Make sure to use the correct namespace if any
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  }
};

export const deleteShoppingList = async (id) => {
  if (process.env.REACT_APP_USE_MOCK_DATA === 'true') {
    // Update the mock data variable
    MOCK_SHOPPING_LISTS = MOCK_SHOPPING_LISTS.filter(list => list.id !== id);
  } else {
    // Call the real API to delete
    const response = await fetch(`/api/shopping-lists/${id}`, { method: 'DELETE' });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json(); // Or handle the response as per your API
  }
};

export const archiveShoppingList = async (id) => {
  if (process.env.REACT_APP_USE_MOCK_DATA === 'true') {
    // Simulate archiving in the mock data
    const listIndex = MOCK_SHOPPING_LISTS.findIndex(list => list.id === id);
    if (listIndex > -1) {
      MOCK_SHOPPING_LISTS[listIndex].archived = true;
      return MOCK_SHOPPING_LISTS[listIndex]; // Return the updated list
    }
  } else {
    // Call the real API to archive
    const response = await fetch(`/api/shopping-lists/${id}/archive`, { method: 'PUT' });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json(); // Or handle the response as per your API
  }
};
