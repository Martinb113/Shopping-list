import React from 'react';
import '../styles/styles.css';

function Item({ item, onDeleteItem }) {
  return (
    <div className="item">
      <span>{item.name}</span>
      <span>Quantity: {item.quantity}</span>
      <button onClick={() => onDeleteItem(item.id)}>Delete</button>
    </div>
  );
}

export default Item;
