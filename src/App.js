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
      displayAddListForm: false
    };
  }

  componentDidMount = () => {
    axios
      .get("http://localhost:4000/data")
      .then(res => {
        this.setState({ todoLists: res.data });
      })
      .catch(err => console.log(err));
  };

  handleSaveProgress = e => {
    axios
      .put("http://localhost:4000/update", {
        payload: JSON.stringify(this.state.todoLists)
      })
      .then(res => console.log("saved new state: ", res.data))
      .catch(err => console.log(err));
  };

  handleListTitle = title => {
    // check if a list with a listTitle === 'title' already exists!

    const matchesTitle = this.state.todoLists.find(list => {
      return list.title === title;
    });

    matchesTitle
      ? alert(`List named ${title} already exists!`)
      : this.setState(prevState => {
          const id = prevState.todoLists.length + 1;

          prevState.todoLists.push({
            id: id,
            title: title,
            todoItems: []
          });

          return prevState;
        });
    this.setState({ displayAddListForm: false });
  };

  handleAddNewList = e => {
    this.setState({ displayAddListForm: true });
  };

  handleThumbnailClick = e => {
    const { title } = e.target;
    console.log("handling thumbnail click of", title);
    console.log("lists in state: ", this.state.todoLists);
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
                    <TodoList title={urlTitle} todoItems={todoList.todoItems} />
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
