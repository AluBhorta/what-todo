import React, { Component } from "react";

class AddItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemTitle: "",
      itemPriority: 5,
      handleListItem: props.handleListItem
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(value);
  };

  handleSubmit = e => {
    e.preventDefault();
    const { itemTitle, handleListItem, itemPriority } = this.state;
    handleListItem(itemTitle, itemPriority);
  };

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
            placeholder="Enter item title"
          />
          <label>Item Priority: {this.state.itemPriority}</label>
          <input
            type="range"
            min={1}
            max={10}
            name="itemPriority"
            value={this.state.itemPriority}
            onChange={this.handleChange}
          />

          <button>Add New Item</button>
        </form>
      </div>
    );
  }
}

export default AddItemForm;
