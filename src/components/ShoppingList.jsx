// src/components/ShoppingList.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './ShoppingList.css';

const ShoppingList = ({ shoppingLists, onDelete }) => {
  return (
    <div className="shopping-lists">
      {shoppingLists.map((list) => (
        <div key={list.id} className="shopping-list-tile">
          <h3>{list.name}</h3>
          <p>{list.description}</p>
          <div className="buttons-container">
            <Link to={`/shopping-list/${list.id}`}>
              <button className="view-button">View Details</button>
            </Link>
            <button className="delete-button" onClick={() => onDelete(list.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShoppingList;
