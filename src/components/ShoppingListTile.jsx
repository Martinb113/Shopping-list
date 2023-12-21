// ShoppingListTile.jsx
import React from 'react';

const ShoppingListTile = ({ shoppingList, onSelect }) => {
  return (
    <div onClick={() => onSelect(shoppingList.id)}>
      <h3>{shoppingList.name}</h3>
      <p>{shoppingList.description}</p>
      {/* More details can be displayed as needed */}
    </div>
  );
};

export default ShoppingListTile;
