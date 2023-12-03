import React from 'react';
import './deleteConfDialog.css';

const DeleteConfirmationDialog = ({ isOpen, onCancel, onConfirm }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="delete-dialog-backdrop">
      <div className="delete-dialog">
        <h2>Confirm Delete</h2>
        <p>Are you sure you want to delete this shopping list?</p>
        <button onClick={onConfirm}>Confirm</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default DeleteConfirmationDialog;

