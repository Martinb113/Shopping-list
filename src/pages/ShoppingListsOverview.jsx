import React, { useState, useEffect } from 'react';
import ShoppingList from '../components/ShoppingList';
import AddShoppingListForm from '../components/AddShoppingListForm';
import DeleteConfirmationDialog from '../components/DeleteConfirmationDialog';
import { deleteShoppingList, archiveShoppingList, fetchShoppingLists } from '../apiService';

const ShoppingListsOverview = () => {
  const [shoppingLists, setShoppingLists] = useState([]);
  const [isDeleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [selectedListId, setSelectedListId] = useState(null);
  const [filterType, setFilterType] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadShoppingLists = async () => {
      try {
        const data = await fetchShoppingLists();

        // Add some logging here to see what `data` contains
        console.log('Fetched data:', data);

        setShoppingLists(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadShoppingLists();
  }, []);

  const openDeleteConfirmation = (id) => {
    setSelectedListId(id);
    setDeleteConfirmationOpen(true);
  };

  const handleArchive = async (id) => {
    setIsLoading(true);
    setError(null);
    try {
      await archiveShoppingList(id);
      setShoppingLists((currentLists) =>
        currentLists.map((list) =>
          list.id === id ? { ...list, archived: true } : list
        )
      );
    } catch (error) {
      setError('Could not archive the item. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleConfirmDelete = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await deleteShoppingList(selectedListId);
      setShoppingLists((currentLists) =>
        currentLists.filter((list) => list.id !== selectedListId)
      );
    } catch (error) {
      setError('Could not delete the item. Please try again.');
    } finally {
      setIsLoading(false);
      setDeleteConfirmationOpen(false);
      setSelectedListId(null);
    }
  };

  const handleAddList = async (newList) => {
    try {
      const addedList = {
        ...newList,
        id: shoppingLists.length + 1,
        archived: false,
      };
      await saveNewShoppingList(addedList);
      setShoppingLists([...shoppingLists, addedList]);
    } catch (error) {
      console.error('Error adding shopping list:', error);
    }
  };

  async function saveNewShoppingList(newList) {
    // Add logic to save the new shopping list to the server or API
    // Example: await createShoppingList(newList);
  }

  const getFilteredLists = () => {
    switch (filterType) {
      case 'archived':
        return shoppingLists.filter((list) => list.archived);
      case 'active':
        return shoppingLists.filter((list) => !list.archived);
      default:
        return shoppingLists;
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const filteredLists = getFilteredLists();

  if (filteredLists.length === 0) {
    return <div>No shopping lists found.</div>;
  }

  return (
    <div>
      <h1>My Shopping Lists</h1>
      <AddShoppingListForm onAddList={handleAddList} />
      <div style={{ margin: '10px 0' }}>
        <button onClick={() => setFilterType('all')}>All</button>
        <button onClick={() => setFilterType('archived')}>Archived</button>
        <button onClick={() => setFilterType('active')}>Active</button>
      </div>
      <ShoppingList
        shoppingLists={filteredLists}
        onDelete={openDeleteConfirmation}
        onArchive={handleArchive}
      />
      <DeleteConfirmationDialog
        isOpen={isDeleteConfirmationOpen}
        onCancel={() => setDeleteConfirmationOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default ShoppingListsOverview;
