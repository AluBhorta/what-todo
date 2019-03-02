import React from "react";
import AllListThumbnails from "./todo/AllListThumbnails";
import Modal from "./Modal";

function Dashboard({
  handleShowModal,
  handleListTitle,
  handleThumbnailClick,
  todoLists,
  displayModal,
  handleCloseModal
}) {
  return (
    <div className="dashboard">
      {/* modal */}
      {displayModal ? (
        <Modal
          handleCloseModal={handleCloseModal}
          handleListTitle={handleListTitle}
        />
      ) : (
        ""
      )}

      {/* btn */}
      <div className="add-list-btn">
        <span>Add New List</span>
        <button className="add-btn" onClick={handleShowModal}>{`+`}</button>
      </div>

      <AllListThumbnails
        todoLists={todoLists}
        handleThumbnailClick={handleThumbnailClick}
      />
    </div>
  );
}

export default Dashboard;
