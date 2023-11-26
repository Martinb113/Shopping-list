import React from 'react';

const ShoppingList = ({ shoppingLists, onDelete }) => {
  return (
    <div>
      <h2>Shopping Lists</h2>
      <ul>
        {shoppingLists.map((list) => (
          <li key={list.id}>
            {list.name} - {list.description}{' '}
            <button onClick={() => onDelete(list.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
