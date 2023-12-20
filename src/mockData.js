// Mock data for shopping lists
const mockData = {
    shoppingLists: [
      {
        id: 1,
        name: 'Groceries',
        description: 'Buy essentials for the week',
        items: [
          { id: 1, name: 'Milk', quantity: 1, purchased: false },
          { id: 2, name: 'Bread', quantity: 2, purchased: false },
          { id: 3, name: 'Eggs', quantity: 1, purchased: true },
          // Add more items...
        ],
        archived: false,
      },
      {
        id: 2,
        name: 'Electronics',
        description: 'Shopping for gadgets',
        items: [
          { id: 4, name: 'Headphones', quantity: 1, purchased: false },
          { id: 5, name: 'HDMI Cable', quantity: 1, purchased: false },
          { id: 6, name: 'Laptop', quantity: 1, purchased: false },
          { id: 7, name: 'Phone', quantity: 1, purchased: false },
          // Add more items...
        ],
        archived: true,
      },
      {
        id: 3,
        name: 'Clothing',
        description: 'Shopping for new clothes',
        items: [
          { id: 8, name: 'T-Shirt', quantity: 3, purchased: false },
          { id: 9, name: 'Jeans', quantity: 1, purchased: false },
          // Add more items...
        ],
        archived: false,
      },
      {
        id: 4,
        name: 'Home Improvement',
        description: 'Buy tools and supplies',
        items: [
          { id: 10, name: 'Hammer', quantity: 1, purchased: false },
          { id: 11, name: 'Paint Brushes', quantity: 3, purchased: false },
          // Add more items...
        ],
        archived: false,
      },
      // Add more lists...
    ],
  };
  
  // Export the mock data
  export default mockData;
  