import React from "react";
import ListThumbnail from "./ListThumbnail";

function AllListThumbnails({ todoLists, handleThumbnailClick }) {
  const listThumbnails = todoLists.map((list, index) => (
    <ListThumbnail
      handleThumbnailClick={handleThumbnailClick}
      key={index}
      title={list.props.title}
    />
  ));

  /* TODO-LISTS as links */
  return <div className="todo-lists">{listThumbnails}</div>;
}

export default AllListThumbnails;
