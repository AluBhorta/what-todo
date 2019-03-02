import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoList from "./components/todo/TodoList";
import Dashboard from "./components/Dashboard";
const axios = require("axios");

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoLists: [],
      displayAddListForm: false,
      displayModal: false
    };
  }

  componentDidMount = () => {
    axios
      .get("http://localhost:4000/data")
      .then(res => {
        console.log(res.data.message);
        if (res.status === 200) {
          this.setState({ todoLists: res.data.payload });
        } else if (res.status === 500) {
          alert("Error 500: Internal Server Error!\nContact your developer.");
        }
      })
      .catch(err => console.log(err));
  };

  handleSaveProgress = e => {
    axios
      .put("http://localhost:4000/update", {
        payload: JSON.stringify(this.state.todoLists)
      })
      .then(res => console.log("saved new state successfully: ", res.data))
      .catch(err => console.log(err));
  };

  handleListTitle = (willAddNewList, title) => {
    if (willAddNewList) {
      const titleExists = this.state.todoLists.find(list => {
        return list.title === title;
      });

      if (titleExists) {
        return alert(`List named '${title}' already exists!`);
      } else {
        this.setState(prevState => {
          const id = prevState.todoLists.length + 1;

          prevState.todoLists.push({
            id: id,
            title: title,
            todoItems: []
          });

          return prevState;
        });
      }
    }
    this.setState({ displayModal: false });
  };

  handleAddNewList = e => {
    this.setState({ displayAddListForm: true });
  };

  handleThumbnailClick = e => {
    // const { title } = e.target;
    // console.log("handling thumbnail click of", title);
    console.log("Lists in state: ", this.state.todoLists);
  };

  handlePlusPriority = (listId, itemId, prevPriority) => {
    if (prevPriority < 10) {
      this.setState(prevState => {
        prevState.todoLists[listId - 1].todoItems[itemId - 1].priority++;
        return prevState;
      });
    } else {
      alert("Max priority is 10, unfortunately");
    }
  };

  handleMinusPriority = (listId, itemId, prevPriority) => {
    if (prevPriority > 1) {
      this.setState(prevState => {
        prevState.todoLists[listId - 1].todoItems[itemId - 1].priority--;
        return prevState;
      });
    } else {
      alert("Min priority is 1, unfortunately");
    }
  };

  editItem = e => {};

  deleteItem = e => {};

  editList = e => {};

  deleteList = e => {};

  handleShowModal = e => {
    this.setState({ displayModal: true });
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
    // this.handleCloseModal("listItemModal");
    this.setState({ displayModal: false });
  };

  handleCloseModal = e => {
    if (e === "listItemModal") {
      this.setState({ displayModal: false });
    } else {
      const className = e.target.className;
      if (className === "modal" || className === "modal-close-btn") {
        this.setState({ displayModal: false });
      }
    }
  };

  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <Header handleSaveProgress={this.handleSaveProgress} />

            <Switch>
              <Route
                exact
                path="/"
                component={() => (
                  <Dashboard
                    handleCloseModal={this.handleCloseModal}
                    displayModal={this.state.displayModal}
                    handleShowModal={this.handleShowModal}
                    handleListTitle={this.handleListTitle}
                    handleAddNewList={this.handleAddNewList}
                    handleThumbnailClick={this.handleThumbnailClick}
                    todoLists={this.state.todoLists}
                    displayAddListForm={this.state.displayAddListForm}
                  />
                )}
              />

              <Route
                path={`/:listTitle`}
                component={({ match }) => {
                  const urlTitle = match.params.listTitle;
                  const todoList = this.state.todoLists.find(list => {
                    const linkTitle = list.title.replace(/ /g, "-");
                    return linkTitle === urlTitle;
                  });

                  return todoList ? (
                    <TodoList
                      handleListItem={this.handleListItem}
                      handleCloseModal={this.handleCloseModal}
                      displayModal={this.state.displayModal}
                      handleShowModal={this.handleShowModal}
                      title={urlTitle}
                      todoItems={todoList.todoItems}
                      handlePlusPriority={this.handlePlusPriority}
                      handleMinusPriority={this.handleMinusPriority}
                      listId={todoList.id}
                    />
                  ) : (
                    <h1>Error 404, no such list named "{urlTitle}" found</h1>
                  );
                }}
              />
            </Switch>
          </div>
        </Router>

        <Footer />
      </div>
    );
  }
}

export default App;
