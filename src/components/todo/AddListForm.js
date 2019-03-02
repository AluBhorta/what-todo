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

    const invalidChars = /[.,'"`*+?$^{}()|[\]\\]/;
    if (!listTitle || listTitle.match(invalidChars)) {
      alert(
        `Please insert a valid List Title. \nInvalid characters: .',"\`*+?$^{}()|[]`
      );
    } else {
      handleListTitle(true, listTitle);
    }
  };

  handleCancel = e => {
    e.preventDefault();
    this.state.handleListTitle(false);
  };

  render() {
    return (
      <div className="add-list-form">
        <h4>List form</h4>
        <form>
          <input
            type="text"
            name="listTitle"
            value={this.state.listTitle}
            onChange={this.handleChange}
            placeholder="Enter list title"
            autoFocus={true}
          />

          <button type="submit" onClick={this.handleSubmit}>
            Add New List
          </button>
          <button onClick={this.handleCancel}>Cancel</button>
        </form>
      </div>
    );
  }
}

export default AddListForm;
