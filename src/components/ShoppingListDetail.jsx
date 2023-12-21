import { useState, useEffect } from 'react';
import AddShoppingListForm from './AddShoppingListForm'; // Import AddShoppingListForm
//import { setFilterType } from '../pages/ShoppingListsOverview'; // Import setFilterType if necessary
import DeleteConfirmationDialog from './DeleteConfirmationDialog'; // Import DeleteConfirmationDialog if necessary
import ShoppingListTile from './ShoppingListTile'; // Make sure to import ShoppingListTile

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
