import React from "react";
import AddListForm from "./todo/AddListForm";
import AddButton from "./AddButton";
import AllListThumbnails from "./todo/AllListThumbnails";

function Dashboard({
  handleListTitle,
  handleAddNewList,
  handleThumbnailClick,
  todoLists2,
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
        todoLists2={todoLists2}
        handleThumbnailClick={handleThumbnailClick}
      />
    </div>
  );
}

export default Dashboard;
