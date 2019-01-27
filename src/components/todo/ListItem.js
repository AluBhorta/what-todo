import React from "react";

function ListItem(props) {
  const { priority, title } = props;
  return (
    <div className="list-item">
      <h3>List Item</h3>
      Priority: {priority}
      <br />
      Title: {title}
    </div>
  );
}

export default ListItem;
