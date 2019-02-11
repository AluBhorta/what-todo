import React from "react";

function ListItem(props) {
  const { priority, title } = props;
  return (
    <div className="list-item">
      <strong>Todo Item</strong>: {title}
      <br />
      Priority: {priority}
    </div>
  );
}

export default ListItem;
