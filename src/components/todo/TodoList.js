import React, { Component } from "react";
import AddButton from "../AddButton";
import ListItem from "./ListItem";
import AddItemForm from "./AddItemForm";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listTitle: props.title,
      listItems: [],
      displayForm: false
    };
  }

  handleAddListItem = e => {
    console.log("adding list item");
  };

  render(props) {
    return (
      <div className="todo-list">
        <h1>Todo List: {this.state.listTitle}</h1>
        <AddButton handleAddListItem={this.handleAddListItem} />
      </div>
    );
  }
}

export default TodoList;
