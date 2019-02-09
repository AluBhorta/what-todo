import React, { Component } from "react";
import AddButton from "../AddButton";
import ListItem from "./ListItem";
import AddItemForm from "./AddItemForm";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listTitle: props.title,
      listItems: props.todoItems,
      displayAddItemForm: false
    };
  }

  handleAddNewListItem = e => {
    this.setState({ displayAddItemForm: true });
  };

  handleListItem = (willAddNewItem, itemTitle, itemPriority) => {
    if (willAddNewItem) {
      this.setState(prevState => {
        const id = prevState.listItems.length + 1;
        // prevState.listItems.push(
        //   <ListItem key={id} title={itemTitle} priority={itemPriority} />
        // );
        prevState.listItems.push({
          id: id,
          title: itemTitle,
          priority: itemPriority
        });
        return prevState;
      });
    }
    this.setState({ displayAddItemForm: false });
  };

  render(props) {
    const listItems = this.state.listItems.map(item => (
      <ListItem key={item.id} title={item.title} priority={item.priority} />
    ));

    return (
      <div className="todo-list">
        <h1>Title: {this.state.listTitle}</h1>

        {this.state.displayAddItemForm ? (
          <AddItemForm handleListItem={this.handleListItem} />
        ) : (
          <AddButton handleAddNewListItem={this.handleAddNewListItem} />
        )}
        <div className="list-items">{listItems}</div>
      </div>
    );
  }
}

export default TodoList;
