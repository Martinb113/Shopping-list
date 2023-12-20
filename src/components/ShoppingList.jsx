// src/components/ShoppingList.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DeleteConfirmationDialog from './DeleteConfirmationDialog';
import './ShoppingList.css';
import { deleteShoppingList, archiveShoppingList, fetchShoppingLists } from '../apiService';



const ShoppingList = ({ onDelete, onArchive }) => {
  const [shoppingLists, setShoppingLists] = useState([]); // State for shopping lists
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedListId, setSelectedListId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const shoppingData = await fetchShoppingLists();
        setShoppingLists(shoppingData);  // Update state with fetched data
      } catch (error) {
        console.error('Error fetching shopping lists:', error);
      }
    };

    fetchData(); // Call the function to fetch shopping lists when the component mounts
  }, []);
  
  const openDeleteDialog = (id) => {
    setSelectedListId(id);
    setIsDeleteDialogOpen(true);
  };

  const closeDeleteDialog = () => {
    setIsDeleteDialogOpen(false);
    setSelectedListId(null);
  };

  const confirmDelete = async () => {
    try {
      await deleteShoppingList(selectedListId);
      onDelete(selectedListId); // Update local state after successful deletion
    } catch (error) {
      console.error('Error deleting shopping list:', error);
      // Handle error, e.g., show an error message to the user
    }
    closeDeleteDialog();
  };

  const markAsDone = async (id) => {
    try {
      await archiveShoppingList(id);
      onArchive(id); // Update local state after successful archiving
    } catch (error) {
      console.error('Error archiving shopping list:', error);
      // Handle error
    }
  };

  if (!Array.isArray(shoppingLists)) {
    // Handle the case where shoppingLists is not an array
    return <div>Error: Shopping lists data is not available.</div>;
  }

  const activeItems = shoppingLists.filter(list => !list.archived);
  const archivedItems = shoppingLists.filter(list => list.archived);

  return (
    <div className="shopping-lists">
      {/* Render active items */}
      {activeItems.map((list) => (
        <div key={list.id} className={`shopping-list-tile ${list.archived ? 'archived-item' : ''}`}>
          <h3>{list.name}</h3>
          <p>{list.description}</p>
          <div className="buttons-container">
            <Link to={`/shopping-list/${list.id}`}>
              <button className="view-button">View Details</button>
            </Link>
            <button className="delete-button" onClick={() => openDeleteDialog(list.id)}>
              Delete
            </button>
            <button className="Done-Button" onClick={() => markAsDone(list.id)}>Done</button>
          </div>
        </div>
      ))}

      {/* Render archived items at the bottom */}
      {archivedItems.length > 0 && (
        <div className="archived-items-section">
          <h2>Archived Items</h2>
          {archivedItems.map((list) => (
            <div key={list.id} className="shopping-list-tile archived-item">
              <h3>{list.name}</h3>
              <p>{list.description}</p>
            </div>
          ))}
        </div>
      )}

      <DeleteConfirmationDialog
        isOpen={isDeleteDialogOpen}
        onCancel={closeDeleteDialog}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

export default ShoppingList;
