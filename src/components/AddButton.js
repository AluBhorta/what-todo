import React from "react";

function AddButton(props) {
  const { handleAddNewList, handleAddListItem } = props;
  return (
    <button
      className="add-btn"
      onClick={handleAddNewList ? handleAddNewList : handleAddListItem}
    >
      {` + `}
    </button>
  );
}

export default AddButton;
