// src/components/ShoppingList.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteConfirmationDialog from './DeleteConfirmationDialog';
import './ShoppingList.css';

const ShoppingList = ({ shoppingLists, onDelete, onArchive }) => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedListId, setSelectedListId] = useState(null);

  const openDeleteDialog = (id) => {
    setSelectedListId(id);
    setIsDeleteDialogOpen(true);
  };

  const closeDeleteDialog = () => {
    setIsDeleteDialogOpen(false);
    setSelectedListId(null);
  };

  const confirmDelete = () => {
    onDelete(selectedListId);
    closeDeleteDialog();
  };

  const markAsDone = (id) => {
    onArchive(id);
  };

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
        onDelete={confirmDelete}
      />
    </div>
  );
};

export default ShoppingList;
