import React, { useState } from 'react';

const AddShoppingListForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, description });
    setName('');
    setDescription('');
  };

  return (
    <div>
      <h2>Add Shopping List</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nameInput">
          Name:
          <input
            type="text"
            id="nameInput"  // Add unique id
            name="name"     // Add name attribute
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="descriptionInput">
          Description:
          <input
            type="text"
            id="descriptionInput"  // Add unique id
            name="description"     // Add name attribute
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddShoppingListForm;
