import React from "react";

function ListItem(props) {
  const { priority, title } = props;
  return (
    <div className="list-item">
      <h3>List Item</h3>
      Title: {title}
      Priority: {priority}
    </div>
  );
}

export default ListItem;
