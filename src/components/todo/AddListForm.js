import React, { Component } from "react";

class AddListForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listTitle: "",
      handleListTitle: props.handleListTitle
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { listTitle, handleListTitle } = this.state;
    handleListTitle(listTitle);
  };

  render() {
    return (
      <div className="add-list-form">
        <h4>List form</h4>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="listTitle"
            value={this.state.listTitle}
            onChange={this.handleChange}
            placeholder="Enter list title"
            autoFocus={true}
          />
          <button>Add New List</button>
        </form>
      </div>
    );
  }
}

export default AddListForm;
