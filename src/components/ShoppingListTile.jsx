// ShoppingListTile.js
import React from 'react';

const ShoppingListTile = ({ list, onDelete }) => {
  return (
    <div>
      <h3>{list.name}</h3>
      <p>{list.description}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default ShoppingListTile;
