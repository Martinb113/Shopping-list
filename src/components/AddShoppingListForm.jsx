// src/components/AddShoppingListForm.jsx

import React, { useState } from 'react';  // Add this line

// ... (other imports and code)

function AddShoppingListForm({ onAddList }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddList({ name, description });
    setName('');
    setDescription('');
  };

  return (
    <div className="add-list-form">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Description:
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default AddShoppingListForm;
