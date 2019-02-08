import React from "react";
import AddListForm from "./todo/AddListForm";
import AddButton from "./AddButton";
import AllListThumbnails from "./todo/AllListThumbnails";

function Dashboard({
  handleListTitle,
  handleAddNewList,
  handleThumbnailClick,
  todoLists,
  displayAddListForm
}) {
  return (
    <div className="dashboard">
      {/* add-list-btn / add-list-form */}
      <div className="add-list-btn">
        {displayAddListForm ? (
          <AddListForm handleListTitle={handleListTitle} />
        ) : (
          <AddButton handleAddNewList={handleAddNewList} />
        )}
      </div>

      <AllListThumbnails
        todoLists={todoLists}
        handleThumbnailClick={handleThumbnailClick}
      />
    </div>
  );
}

export default Dashboard;
