// ShoppingListDetail.js
import React from 'react';

const ShoppingListDetail = ({ match }) => {
  const { listId } = match.params; // Extracting listId from the URL params
  // You can fetch the details of the shopping list with the provided listId from your data source

  return (
    <div>
      <h2>Shopping List Details</h2>
      <p>List ID: {listId}</p>
      {/* Add more details based on your data */}
    </div>
  );
};

export default ShoppingListDetail;
