import React, { useState } from 'react';
import ItemForm from './ItemForm'; // Adjust the path as necessary
import '../styles/ShoppingListDetail.css';
// ShoppingListDetail.jsx

const ShoppingListDetail = ({ shoppingList }) => {
  const [items, setItems] = useState(shoppingList.items || []);

  const handleAddItem = (newItem) => {
    setItems([...items, { ...newItem, id: items.length + 1 }]);
  };

  const handleDeleteItem = (itemId) => {
    setItems(items.filter(item => item.id !== itemId));
  };

  return (
    <div className="list-details">
      {/* Render ItemForm for adding new items */}
      <ItemForm onAddItem={handleAddItem} />
      {/* Render items */}
      {items.map(item => (
        <div key={item.id} className="list-item">
          <span className="item-name">{item.name}</span>
          <span className="item-quantity"> {item.quantity}</span>
          <span className="item-purchased"> {item.purchased}</span>
          {/* ... other item details ... */}
          <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

  
  export default ShoppingListDetail;
  