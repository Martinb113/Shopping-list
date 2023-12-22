import React, { useState } from 'react';
import ItemForm from './ItemForm'; // Component to add items to the list
import Item from './Item'; // Component to display each item

// ... (other imports and code)

const ShoppingListDetail = ({
  shoppingList,
  handleAddList,
  filteredLists,
  isDeleteConfirmationOpen,
  setDeleteConfirmationOpen,
  handleConfirmDelete,
  setFilterType, // Accept setFilterType as a prop
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <h1>My Shopping Lists</h1>
      <AddShoppingListForm onAddList={handleAddList} />
      <div style={{ margin: '10px 0' }}>
        <button onClick={() => setFilterType('all')}>All</button>
        <button onClick={() => setFilterType('archived')}>Archived</button>
        <button onClick={() => setFilterType('active')}>Active</button>
      </div>

      {Array.isArray(filteredLists) && filteredLists.map((list) => (
  <ShoppingListTile key={list.id} shoppingList={list} />
))}
      <DeleteConfirmationDialog
        isOpen={isDeleteConfirmationOpen}
        onCancel={() => setDeleteConfirmationOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default ShoppingListDetail;
