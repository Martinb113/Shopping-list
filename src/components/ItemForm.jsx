import React, { useState } from 'react';

function ItemForm({ onAddItem }) {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!itemName) return; // Prevent adding empty items

    // Call the onAddItem function passed from the parent component
    onAddItem({
      name: itemName,
      quantity,
      purchased: false
    });

    // Reset the form fields
    setItemName('');
    setQuantity(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Item Name:
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          required
        />
      </label>
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
      <button type="submit">Add Item</button>
    </form>
  );
}

export default ItemForm;
