import React from 'react';

const ShoppingList = ({ shoppingLists, onDelete }) => {
  return (
    <div className="shopping-lists">
      {shoppingLists.map((list) => (
        <div key={list.id} className="shopping-list-item">
          <h3>{list.name}</h3>
          <p>{list.description}</p>
          <button onClick={() => onDelete(list.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ShoppingList;
