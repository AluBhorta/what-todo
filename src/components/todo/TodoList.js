import React, { Component } from "react";

import ListItem from "./ListItem";
import AddItemForm from "./AddItemForm";
import Modal from "../Modal";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listId: props.listId,
      listTitle: props.title,
      listItems: props.todoItems,
      displayAddItemForm: false
    };
    this.handleListItem = props.handleListItem;
    this.displayModal = props.displayModal;
    this.handlePlusPriority = props.handlePlusPriority;
    this.handleMinusPriority = props.handleMinusPriority;
    this.handleShowModal = props.handleShowModal;
    this.handleCloseModal = props.handleCloseModal;
  }

  handleAddNewListItem = e => {
    this.setState({ displayAddItemForm: true });
  };

  // handleListItem = (willAddNewItem, itemTitle, itemPriority) => {
  //   if (willAddNewItem) {
  //     this.setState(prevState => {
  //       const id = prevState.listItems.length + 1;
  //       prevState.listItems.push({
  //         id: id,
  //         title: itemTitle,
  //         priority: itemPriority
  //       });
  //       return prevState;
  //     });
  //   }
  //   this.handleCloseModal("listItemModal");
  //   // this.setState({ displayModal: false });
  // };

  render() {
    console.log("listItems", this.state.listItems);

    // ~sort the items //
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
        {this.displayModal ? (
          <Modal
            handleCloseModal={this.handleCloseModal}
            handleListItem={this.handleListItem}
          />
        ) : (
          ""
        )}

        <div className="list-header">
          <h2>List Name: {this.state.listTitle}</h2>
          <div className="list-edit-btns">
            <button>Edit List</button>
            <button>Delete List</button>
          </div>
        </div>

        <div className="list-body">
          <button
            className="add-btn"
            onClick={this.handleShowModal}
          >{`+`}</button>

          {/* LIST ITEMS */}
          <div className="list-items">{listItems}</div>
        </div>
      </div>
    );
  }
}

export default TodoList;
