// ShoppingListTile.jsx
import React from 'react';

const ShoppingListTile = ({ shoppingList, onSelect, isExpanded }) => {
  const renderItemDetails = (item) => {
    return (
      <div key={item.id} className="item-details">
        <span>Name: {item.name}</span>
        <span>Quantity: {item.quantity}</span>
        <span>Purchased: {item.purchased ? 'Yes' : 'No'}</span>
        {/* Additional item details or actions can be added here */}
      </div>
    );
  };

  return (
    <div className="shopping-list-tile" onClick={() => onSelect(shoppingList.id)}>
      <h3>{shoppingList.name}</h3>
      <p>{shoppingList.description}</p>
      {isExpanded && (
        <div className="list-item-container">
          {shoppingList.items.map(renderItemDetails)}
        </div>
      )}
    </div>
  );
};

export default ShoppingListTile;
