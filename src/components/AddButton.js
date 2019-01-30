import React from "react";

function AddButton(props) {
  const { handleAddNewList, handleAddNewListItem } = props;
  return (
    <div>
      <span>
        {handleAddNewList ? "Add New Todo List " : "Add New Todo List Item "}
      </span>
      <button
        className="add-btn"
        onClick={handleAddNewList ? handleAddNewList : handleAddNewListItem}
      >
        {` + `}
      </button>
    </div>
  );
}

export default AddButton;
