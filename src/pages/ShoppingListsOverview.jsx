import React, { useState } from 'react';
import ShoppingList from '../components/ShoppingList';
import AddShoppingListForm from '../components/AddShoppingListForm';
import DeleteConfirmationDialog from '../components/DeleteConfirmationDialog';
import { deleteShoppingList, archiveShoppingList } from '../apiService';
import { fetchShoppingLists } from '../apiService';



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
  const [filterType, setFilterType] = useState('all'); // State to toggle archived items

  /*const handleDelete = (id) => {
    setShoppingLists(shoppingLists.filter(list => list.id !== id));
    setDeleteConfirmationOpen(false);
  };*/

  // Function to open delete confirmation dialog
  const openDeleteConfirmation = (id) => {
    console.log("Opening delete confirmation for id:", id); // Debug: Check the id being set
    setSelectedListId(id);
    setDeleteConfirmationOpen(true);
  };

  /*const handleArchive = (id) => {
    setShoppingLists(shoppingLists.map(list => 
      list.id === id ? { ...list, archived: true } : list
    ));
  };*/

  const handleArchive = async (id) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await archiveShoppingList(id); // Call the API to archive
      // Optionally use 'data' if needed
      setShoppingLists(currentLists => currentLists.map(list => 
        list.id === id ? { ...list, archived: true } : list
      ));
    } catch (error) {
      setError('Could not archive the item. Please try again.'); // Set an error message
    }
    setIsLoading(false);
  };
  


   /* const updatedLists = shoppingLists.map((list) =>
      list.id === selectedListId ? { ...list, archived: true } : list
    );
    setShoppingLists(updatedLists);
    setDeleteConfirmationOpen(false);
    setSelectedListId(null);
  };*/

  /*const handleConfirmDelete = () => {
    setShoppingLists(shoppingLists.filter(list => list.id !== selectedListId));
    setDeleteConfirmationOpen(false);
    setSelectedListId(null);
  };*/

  /*const handleConfirmDelete = () => {
    console.log("Confirming deletion for id:", selectedListId); // Debug: Confirm id
    const newList = shoppingLists.filter(list => list.id !== selectedListId);
    console.log("New list after deletion:", newList); // Debug: Check the new list
    setShoppingLists(newList);
    setDeleteConfirmationOpen(false);
    setSelectedListId(null);
  };*/

  const handleConfirmDelete = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await deleteShoppingList(selectedListId); // Call the API to delete
      // Optionally use 'data' if needed
      setShoppingLists(currentLists => currentLists.filter(list => list.id !== selectedListId));
    } catch (error) {
      setError('Could not delete the item. Please try again.'); // Set an error message
    }
    setIsLoading(false);
    setDeleteConfirmationOpen(false);
    setSelectedListId(null);
  };

  function handleAddList(newList) {
    console.log("test adding logs")
    setShoppingLists([...shoppingLists, { ...newList, id: shoppingLists.length + 1, archived: false }]);
  }

  // Filter based on filterType
  const getFilteredLists = () => {
    switch (filterType) {
      case 'archived':
        return shoppingLists.filter(list => list.archived);
      case 'active':
        return shoppingLists.filter(list => !list.archived);
      default:
        return shoppingLists;
    }
  };

  const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);

const fetchShoppingLists = async () => {
  setIsLoading(true);
  setError(null);
  try {
    const data = await fetchShoppingLists(); // Directly using the imported function
    setShoppingLists(data);
  } catch (err) {
    setError(err.message);
  } finally {
    setIsLoading(false);
  }
};

  return (
    <div>
    <h1>My Shopping Lists</h1>
    {isLoading && <p>Loading...</p>}
    {error && <p>Error: {error}</p>}
    {!isLoading && !error && (
      <>
        <AddShoppingListForm onAddList={handleAddList} />
        <div style={{ margin: '10px 0' }}>
          <button onClick={() => setFilterType('all')}>All</button>
          <button onClick={() => setFilterType('archived')}>Archived</button>
          <button onClick={() => setFilterType('active')}>Active</button>
        </div>
        <ShoppingList 
          shoppingLists={getFilteredLists()} 
          onDelete={openDeleteConfirmation} 
          onArchive={handleArchive}
        />
        <DeleteConfirmationDialog 
          isOpen={isDeleteConfirmationOpen} 
          onCancel={() => setDeleteConfirmationOpen(false)} 
          onConfirm={handleConfirmDelete}
        />
      </>
    )}
  </div>
);

};

export default ShoppingListsOverview;
