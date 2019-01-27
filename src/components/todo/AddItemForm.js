import React, { Component } from "react";

class AddItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemTitle: "",
      itemPriority: ""
    };
  }

  handleChange = e => {};

  render() {
    return (
      <div className="add-item-form">
        <h4>List Item form</h4>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="itemTitle"
            value={this.state.itemTitle}
            onChange={this.handleChange}
            placeholder="Enter list item title"
          />
          <button>Add New Item</button>
        </form>
      </div>
    );
  }
}

export default AddItemForm;
