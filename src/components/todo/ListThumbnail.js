import React from "react";
import { Link } from "react-router-dom";

function ListThumbnail(props) {
  const { title, handleThumbnailClick } = props;
  return (
    <div
      className="todo-list-thumbnail"
      onClick={handleThumbnailClick}
      title={title}
    >
      <Link to={"/" + title}>
        <h3>Title: {title ? title : "no title"}</h3>
      </Link>
    </div>
  );
}

export default ListThumbnail;
