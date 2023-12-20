// Mock data for shopping lists
const MOCK_DATA = {
    shoppingLists: [
      {
        id: 1,
        name: 'Groceries',
        description: 'Buy essentials for the week',
        items: [
          { id: 1, name: 'Milk', quantity: 1, purchased: false },
          { id: 2, name: 'Bread', quantity: 2, purchased: false },
          // More items...
        ],
        archived: false
      },
      {
        id: 2,
        name: 'Electronics',
        description: 'Shopping for gadgets',
        items: [
          { id: 3, name: 'Headphones', quantity: 1, purchased: false },
          { id: 4, name: 'HDMI Cable', quantity: 1, purchased: false },
          // More items...
        ],
        archived: false
      },
      // More lists...
    ]
  };
  
  // Export the mock data
  export default MOCK_DATA;
  