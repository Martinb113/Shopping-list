// Directly export the array of shopping lists
export default [
    {
      id: 1,
      name: 'Groceries',
      description: 'Buy essentials for the week',
      user_owner: 'user123', // Owner of the list
      contributors: ['user456', 'user789'], // Contributors to the list
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
      user_owner: 'user789', // Owner of the list
      contributors: ['user123'], // Contributors to the list
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
      user_owner: 'user456', // Owner of the list
      contributors: [], // Contributors to the list
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
      user_owner: 'user123', // Owner of the list
      contributors: [], // Contributors to the list
      items: [
        { id: 10, name: 'Hammer', quantity: 1, purchased: false },
        { id: 11, name: 'Paint Brushes', quantity: 3, purchased: false },
        // Add more items...
      ],
      archived: false,
    },
    // Add more lists...
  ];

