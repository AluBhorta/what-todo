import React from "react";
import ListThumbnail from "./ListThumbnail";

function AllListThumbnails({ todoLists, handleThumbnailClick }) {
  const listThumbnails2 = todoLists.map((list, index) => (
    <ListThumbnail
      key={index}
      handleThumbnailClick={handleThumbnailClick}
      title={list.title}
    />
  ));

  /* TODO-LISTS as links */
  return <div className="todo-lists">{listThumbnails2}</div>;
}

export default AllListThumbnails;
