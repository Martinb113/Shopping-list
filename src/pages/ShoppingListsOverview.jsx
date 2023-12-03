import React, { useState } from 'react';
import ShoppingList from '../components/ShoppingList';
import AddShoppingListForm from '../components/AddShoppingListForm';
import DeleteConfirmationDialog from '../components/DeleteConfirmationDialog';

const sampleData = [
  { id: 1, name: 'Groceries', description: 'Buy essentials for the week', items: [], archived: false },
  { id: 2, name: 'Electronics', description: 'Shopping for gadgets', items: [], archived: false },
  { id: 3, name: 'Christmas shopping', description: 'Make them happy', items: [], archived: false },
  { id: 4, name: 'Birthday party', description: 'Surprise for my love', items: [], archived: true },
  // Add more sample data as neededalse
];

const ShoppingListsOverview = () => {
  const [shoppingLists, setShoppingLists] = useState(sampleData);
  const [isDeleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [selectedListId, setSelectedListId] = useState(null);
  const [showArchived, setShowArchived] = useState(false);
  const [filterType, setFilterType] = useState('all'); // Add this line


  const handleDelete = (id) => {
    setShoppingLists(shoppingLists.filter(list => list.id !== id));
  };

  // Function to toggle delete confirmation dialog
  const toggleDeleteConfirmation = (id) => {
    setSelectedListId(id);
    setDeleteConfirmationOpen(!isDeleteConfirmationOpen);
  };

  const handleCancelDelete = () => {
    setDeleteConfirmationOpen(false);
    setSelectedListId(null);
  };

  const handleAddList = (newList) => {
    setShoppingLists([...shoppingLists, { id: shoppingLists.length + 1, ...newList, archived: false }]);
  };

  const handleArchive = (id) => {
    setShoppingLists(shoppingLists.map(list => 
        list.id === id ? { ...list, archived: true } : list
    ));
  };

  const handleToggleArchived = () => {
    setShowArchived(!showArchived);
  };

  const handleConfirmDelete = () => {
    const updatedLists = shoppingLists.map((list) =>
      list.id === selectedListId ? { ...list, archived: true } : list
    );
    setShoppingLists(updatedLists);
    setDeleteConfirmationOpen(false);
    setSelectedListId(null);
  };

  const filteredLists = showArchived ? shoppingLists.filter(list => list.archived) : shoppingLists.filter(list => !list.archived);
  /*const filteredLists = shoppingLists.filter(list => {
    switch (filterType) {
      case 'archived':
        return list.archived;
      case 'active':
        return !list.archived;
      default:
        return true;
    }
  });*/
  

  return (
  <div>
    <h1>My Shopping Lists</h1>
    <AddShoppingListForm onAdd={handleAddList} />
    <ShoppingList 
                shoppingLists={filteredLists} 
                onDelete={handleDelete}
                onArchive={handleArchive}
                onToggleDeleteConfirmation={toggleDeleteConfirmation} 
                />
    <DeleteConfirmationDialog
                isOpen={isDeleteConfirmationOpen}
                onCancel={() => setDeleteConfirmationOpen(false)}
                onConfirm={() => {
                  handleDelete(selectedListId);
                  setDeleteConfirmationOpen(false);
              }}  
    />
  
    <div style={{ position: 'fixed', bottom: 50, left: 10 }}>
      <button onClick={() => setFilterType('all')}>All</button>
      <button onClick={() => setFilterType('archived')}>Archived</button>
      <button onClick={() => setFilterType('active')}>Active</button>
    </div>

  </div>
);

};

export default ShoppingListsOverview;
