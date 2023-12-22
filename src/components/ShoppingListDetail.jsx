import React, { useState } from 'react';
import ItemForm from './ItemForm'; // Component to add items to the list
import Item from './Item'; // Component to display each item

const ShoppingListDetail = ({ shoppingList }) => {
  // Assuming shoppingList contains an `items` array
  const [items, setItems] = useState(shoppingList.items);

  const handleAddItem = (newItem) => {
    // Add the new item to the items array
    setItems([...items, newItem]);
  };

  const handleDeleteItem = (itemId) => {
    // Remove the item from the items array
    setItems(items.filter(item => item.id !== itemId));
  };

  return (
    <div>
      <h2>{shoppingList.name}</h2>
      <p>{shoppingList.description}</p>
      <ItemForm onAddItem={handleAddItem} />
      {items.map(item => (
        <Item key={item.id} item={item} onDeleteItem={handleDeleteItem} />
      ))}
    </div>
  );
};

export default ShoppingListDetail;
