import React, { useState } from 'react';
import ShoppingList from '../components/ShoppingList';
import AddShoppingListForm from '../components/AddShoppingListForm';
import DeleteConfirmationDialog from '../components/DeleteConfirmationDialog';
//import './ShoppingListsOverview.css';

// src/components/ShoppingListsOverview.jsx

// ... (other imports and code)

const sampleData = [
  { id: 1, name: 'Groceries', description: 'Buy essentials for the week', items: [] },
  { id: 2, name: 'Electronics', description: 'Shopping for gadgets', items: [] },
  { id: 3, name: 'Christmas shopping', description: 'Make them happy', items: [] },
  { id: 4, name: 'Birthday party', description: 'Suprissed for my love', items: [] },
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
    setShoppingLists([...shoppingLists, { id: shoppingLists.length + 1, items: [], ...newList }]);
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
