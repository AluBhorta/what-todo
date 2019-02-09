import React from "react";
import ListThumbnail from "./ListThumbnail";

function AllListThumbnails({ todoLists2, handleThumbnailClick }) {
  const listThumbnails2 = todoLists2.map((list, index) => (
    <ListThumbnail
      key={index + console.log(list)}
      handleThumbnailClick={handleThumbnailClick}
      title={list.title}
    />
  ));

  /* TODO-LISTS as links */
  return <div className="todo-lists">{listThumbnails2}</div>;
}

export default AllListThumbnails;
