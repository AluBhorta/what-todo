import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RouterTest from "./components/RouterTest";

import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoList from "./components/todo/TodoList";
import Dashboard from "./components/Dashboard";

class App extends Component {
  state = {
    todoLists: [],
    displayAddListForm: false
  };

  handleAddNewList = e => {
    this.setState({ displayAddListForm: true });
  };

  handleListTitle = title => {
    this.setState(prevState => {
      const id = prevState.todoLists.length;
      prevState.todoLists.push(<TodoList key={id} title={title} />);
      return prevState;
    });
    this.setState({ displayAddListForm: false });
  };

  handleThumbnailClick = e => {
    const { title } = e.target;
    console.log("handling thumb click", title);
  };

  render() {
    return (
      <div className="app">
        <Header />

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
                    todoLists={this.state.todoLists}
                    handleThumbnailClick={this.handleThumbnailClick}
                    displayAddListForm={this.state.displayAddListForm}
                  />
                )}
              />
              <Route path={`/:listTitle`} component={() => <TodoList />} />
            </Switch>
          </div>
        </Router>

        <Footer />
      </div>
    );
  }
}

export default App;
