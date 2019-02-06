import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RouterTest from "./components/RouterTest";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AddButton from "./components/AddButton";
import TodoList from "./components/todo/TodoList";
import AddListForm from "./components/todo/AddListForm";

class App extends Component {
  state = {
    todoLists: [],
    displayAddListModal: false
  };

  handleAddNewList = e => {
    this.setState({ displayAddListModal: true });
  };

  handleListTitle = title => {
    this.setState(prevState => {
      const id = prevState.todoLists.length;
      prevState.todoLists.push(<TodoList key={id} title={title} />);
      return prevState;
    });
    this.setState({ displayAddListModal: false });
  };

  render() {
    const todoLists = this.state.todoLists.map(list => (
      <div className="todo-list-thumbnail">{list.props.title}</div>
    ));

    return (
      <div className="app">
        <Header />
        <div className="add-list-btn">
          {this.state.displayAddListModal ? (
            <AddListForm handleListTitle={this.handleListTitle} />
          ) : (
            <AddButton handleAddNewList={this.handleAddNewList} />
          )}
        </div>
        <div className="todo-lists">{todoLists}</div>
        <Footer />
        {/* <RouterTest /> */}
      </div>
    );
  }
}

export default App;
