import React from "react";

function AddButton(props) {
  const { handleAddNewList, handleAddNewListItem } = props;
  return (
    <button
      className="add-btn"
      onClick={handleAddNewList ? handleAddNewList : handleAddNewListItem}
    >
      {` + `}
    </button>
  );
}

export default AddButton;
