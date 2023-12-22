import React, { useState, useEffect } from 'react';
import ShoppingListDetail from '../components/ShoppingListDetail';
import AddShoppingListForm from '../components/AddShoppingListForm';
import DeleteConfirmationDialog from '../components/DeleteConfirmationDialog';
import { deleteShoppingList, archiveShoppingList, fetchShoppingLists } from '../apiService';
import ShoppingListTile from '../components/ShoppingListTile'; // Make sure to import ShoppingListTile

const ShoppingListsOverview = () => {
  const [shoppingLists, setShoppingLists] = useState([]);
  const [isDeleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [selectedListId, setSelectedListId] = useState(null);
  const [filterType, setFilterType] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); // Define error state
  const [selectedList, setSelectedList] = useState(null);

  useEffect(() => {
    const loadShoppingLists = async () => {
      try {
        const data = await fetchShoppingLists();
        setShoppingLists(data);
      } catch (err) {
        setError(err.message); // Set error state
      } finally {
        setIsLoading(false); // Set isLoading state
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
      setFilterType('active');
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

      if (Array.isArray(shoppingLists)) {
        setShoppingLists([...shoppingLists, addedList]);
      } else {
        setShoppingLists([addedList]);
      }

      await saveNewShoppingList(addedList);
    } catch (error) {
      console.error('Error adding shopping list:', error);
    }
  };

  async function saveNewShoppingList(newList) {
    try {
      const response = await fetch('/shopping-lists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newList),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('New shopping list saved:', data);
      return data;
    } catch (error) {
      console.error('Error saving new shopping list:', error);
      throw error;
    }
  };

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

  //Add state to track the selected list
    const handleSelectList = (listId) => {
    const list = shoppingLists.find((l) => l.id === listId);
    setSelectedList(list);
  };


  return (
    <div>
    <h1>My Shopping Lists</h1>
    <AddShoppingListForm onAddList={handleAddList} />
    <div className="buttons-container"  style={{ margin: '10px 0' }}>
      <button onClick={() => setFilterType('all')}>All</button>
      <button onClick={() => setFilterType('archived')}>Archived</button>
      <button onClick={() => setFilterType('active')}>Active</button>
    </div>
    
    {selectedList ? (
      <ShoppingListDetail shoppingList={selectedList} />
    ) : (
    filteredLists.map((list) => (
      <ShoppingListTile
        key={list.id}
        shoppingList={list}
        onSelect={handleSelectList}
      />
      ))
    )}

      <DeleteConfirmationDialog
        isOpen={isDeleteConfirmationOpen}
        nCancel={() => setDeleteConfirmationOpen(false)}
        onConfirm={handleConfirmDelete}
      />
  </div>
  );
};

export default ShoppingListsOverview;
