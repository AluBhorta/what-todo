import React from "react";

function ListItem(props) {
  const { priority, title } = props;
  return (
    <div className="list-item">
      <div className="item-sec item-sec-1 priority-btns">
        <button className="btn priority-btn"> + Priority </button>
        <button className="btn priority-btn"> - Priority </button>
      </div>
      <div className="item-sec item-sec-2 item-content">
        <strong>{title}</strong>
        <br />
        Priority: {priority}
      </div>
      <div className="item-sec item-sec-3 edit-btns">
        <button className="btn item-edit">Edit Item</button>
        <button className="btn item-delete">Delete Item</button>
      </div>
    </div>
  );
}

export default ListItem;
