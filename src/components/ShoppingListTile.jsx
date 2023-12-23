// ShoppingListTile.jsx
import React from 'react';
import ShoppingListDetail from './ShoppingListDetail'; // Adjust the path as necessary
import '../styles/ShoppingListTile.css';

// ... rest of the component code ...


const ShoppingListTile = ({ shoppingList, onSelect, isExpanded }) => {
  
  
  const handleHeaderClick = (e) => {
    onSelect(shoppingList.id);
    e.stopPropagation(); // Prevents event from bubbling up
  };

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
    <div className="shopping-list-tile">
      <div className="tile-header" onClick={handleHeaderClick}>
        <h3>{shoppingList.name}</h3>
        <p>{shoppingList.description}</p>
      </div>
      {isExpanded && (
        <div onClick={(e) => e.stopPropagation()}>
          {shoppingList.items.map(renderItemDetails)}
          {/* Optionally include ShoppingListDetail here if it is used for different purpose */}
          {<ShoppingListDetail shoppingList={shoppingList} />}
        </div>
      )}
    </div>
  );
};

export default ShoppingListTile;

