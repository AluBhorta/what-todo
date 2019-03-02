import React, { Component } from "react";
import AddButton from "../AddButton";
import ListItem from "./ListItem";
import AddItemForm from "./AddItemForm";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listId: props.listId,
      listTitle: props.title,
      listItems: props.todoItems,
      displayAddItemForm: false
    };
    this.handlePlusPriority = props.handlePlusPriority;
    this.handleMinusPriority = props.handleMinusPriority;
  }

  handleAddNewListItem = e => {
    this.setState({ displayAddItemForm: true });
  };

  handleListItem = (willAddNewItem, itemTitle, itemPriority) => {
    if (willAddNewItem) {
      this.setState(prevState => {
        const id = prevState.listItems.length + 1;
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

  render() {
    // const sortedItems = this.state.listItems.sort((a, b) => {
    //   return b.priority - a.priority;
    // });

    const listItems = this.state.listItems.map(item => (
      <ListItem
        key={item.id}
        itemId={item.id}
        listId={this.state.listId}
        title={item.title}
        priority={item.priority}
        handlePlusPriority={this.handlePlusPriority}
        handleMinusPriority={this.handleMinusPriority}
      />
    ));

    return (
      <div className="todo-list">
        <div className="list-header">
          <h2>List Name: {this.state.listTitle}</h2>
          <div className="list-edit-btns">
            <button>Edit List</button>
            <button>Delete List</button>
          </div>
        </div>

        <div className="list-body">
          {this.state.displayAddItemForm ? (
            <AddItemForm handleListItem={this.handleListItem} />
          ) : (
            <AddButton handleAddNewListItem={this.handleAddNewListItem} />
          )}

          {/* LIST ITEMS */}
          <div className="list-items">{listItems}</div>
        </div>
      </div>
    );
  }
}

export default TodoList;
