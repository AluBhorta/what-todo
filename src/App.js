import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoList from "./components/todo/TodoList";
import Dashboard from "./components/Dashboard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoLists: [],
      displayAddListForm: false
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:4000/")
      .then(req => console.log(req))
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };

  handleSaveProgress = e => {
    console.log("saving progress");
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
                    todoLists={this.state.todoLists}
                    handleThumbnailClick={this.handleThumbnailClick}
                    displayAddListForm={this.state.displayAddListForm}
                  />
                )}
              />
              <Route
                path={`/:listTitle`}
                component={({ match }) => {
                  const urlTitle = match.params.listTitle;
                  const todoList = this.state.todoLists.find(list => {
                    return list.props.title === urlTitle;
                  });
                  return todoList ? (
                    <TodoList title={urlTitle} />
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
