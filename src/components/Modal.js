import React from "react";
import AddListForm from "./todo/AddListForm";
import AddItemForm from "./todo/AddItemForm";

function Modal({
  handleCloseModal,
  handleListItem,
  handleListTitle,
  handleAddNewListItem
}) {
  return (
    <div className="modal" onClick={handleCloseModal}>
      <div className="modal-content">
        <span className="modal-close-btn">&times;</span>
        {handleListTitle ? (
          <AddListForm handleListTitle={handleListTitle} />
        ) : (
          <AddItemForm handleListItem={handleListItem} />
        )}
      </div>
    </div>
  );
}

export default Modal;
