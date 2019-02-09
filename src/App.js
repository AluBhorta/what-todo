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
      todoLists2: [],
      displayAddListForm: false
    };
  }

  componentDidMount = () => {
    axios
      .get("http://localhost:4000/")
      .then(res => {
        console.log("data: ", res.data);
        this.setState({ todoLists2: res.data });
      })
      .catch(err => console.log(err));
  };

  handleSaveProgress = e => {
    console.log("saving progress");
  };

  handleListTitle = title => {
    this.setState(prevState => {
      const id = prevState.todoLists2.length + 1;

      prevState.todoLists2.push({
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
  };

  render() {
    return (
      <div className="app">
        <Header handleSaveProgress={this.handleSaveProgress} />

        <Router>
          <div>
            <Switch>
              <Route
                exact
                path="/"
                component={() => (
                  <Dashboard
                    handleListTitle={this.handleListTitle}
                    handleAddNewList={this.handleAddNewList}
                    handleThumbnailClick={this.handleThumbnailClick}
                    todoLists2={this.state.todoLists2}
                    displayAddListForm={this.state.displayAddListForm}
                  />
                )}
              />
              <Route
                path={`/:listTitle`}
                component={({ match }) => {
                  const urlTitle = match.params.listTitle;
                  const todoList = this.state.todoLists2.find(list => {
                    return list.title === urlTitle;
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
