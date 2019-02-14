import React from "react";
import { Link } from "react-router-dom";

function ListThumbnail(props) {
  const { title, handleThumbnailClick } = props;

  const linkTitle = title.replace(/ /g, "-");
  return (
    <div
      className="todo-list-thumbnail"
      onClick={handleThumbnailClick}
      title={title}
    >
      <Link to={"/" + linkTitle} className="list-thumbnail-link">
        <h3>{title}</h3>
      </Link>
      <span className="thumbnail-edit">{" : : "}</span>
    </div>
  );
}

export default ListThumbnail;
