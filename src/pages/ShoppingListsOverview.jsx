import React, { useState } from 'react';
import ShoppingList from '../components/ShoppingList';
import AddShoppingListForm from '../components/AddShoppingListForm';
import DeleteConfirmationDialog from '../components/DeleteConfirmationDialog';

const sampleData = [
  { id: 1, name: 'Groceries', description: 'Buy essentials for the week' },
  { id: 2, name: 'Electronics', description: 'Shopping for gadgets' },
  // Add more sample data as needed
];

const ShoppingListsOverview = () => {
  const [shoppingLists, setShoppingLists] = useState(sampleData);
  const [isDeleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [selectedListId, setSelectedListId] = useState(null);

  const handleDelete = (id) => {
    setDeleteConfirmationOpen(true);
    setSelectedListId(id);
  };

  const handleConfirmDelete = () => {
    const updatedLists = shoppingLists.filter((list) => list.id !== selectedListId);
    setShoppingLists(updatedLists);
    setDeleteConfirmationOpen(false);
    setSelectedListId(null);
  };

  const handleCancelDelete = () => {
    setDeleteConfirmationOpen(false);
    setSelectedListId(null);
  };

  const handleAddList = (newList) => {
    setShoppingLists([...shoppingLists, { id: shoppingLists.length + 1, ...newList }]);
  };

  return (
    <div>
      <ShoppingList shoppingLists={shoppingLists} onDelete={handleDelete} />
      <AddShoppingListForm onAdd={handleAddList} />
      <DeleteConfirmationDialog
        isOpen={isDeleteConfirmationOpen}
        onCancel={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default ShoppingListsOverview;
