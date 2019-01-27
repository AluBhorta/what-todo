import React from "react";

function ListItem(props) {
  const { priority, itemText } = props.listItem;
  return (
    <div className="list-item">
      <h3>List Item</h3>
    </div>
  );
}

export default ListItem;
