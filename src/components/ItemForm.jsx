// ItemForm.jsx
import React, { useState } from 'react';
import '../styles/styles.css';

function ItemForm({ onAddItem }) {
    const [itemName, setItemName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [purchased, setPurchased] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!itemName.trim()) return; // Prevent adding empty items
  
      onAddItem({
        name: itemName,
        quantity: parseInt(quantity, 10),
        purchased
      });
  
      // Reset the form fields
      setItemName('');
      setQuantity(1);
      setPurchased(false);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Item Name:
            <input
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Quantity:
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              min="1"
              required
            />
          </label>
        </div>
        <div>
          <label>
            Purchased:
            <input
              type="checkbox"
              checked={purchased}
              onChange={(e) => setPurchased(e.target.checked)}
            />
          </label>
        </div>
        <button type="submit">Add Item</button>
      </form>
    );
  }
  
  export default ItemForm;
  