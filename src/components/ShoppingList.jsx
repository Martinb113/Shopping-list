import React from 'react';
import '../styles/styles.css'; // Import the CSS file

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
