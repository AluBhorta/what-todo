import React, { Component } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AddButton from "./components/AddButton";
import TodoList from "./components/todo/TodoList";

class App extends Component {
  state = {
    todoLists: []
  };

  render() {
    return (
      <div className="App">
        <Header />
        <TodoList />
        <AddButton />
        <Footer />
      </div>
    );
  }
}

export default App;
