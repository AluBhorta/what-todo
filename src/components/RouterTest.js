import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const Home = p => <div>Home</div>;
const Topic = ({ match }) => (
  <div>
    <h3>{match.params.id}</h3>
  </div>
);
const Topics = ({ match }) => {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.path}/topic1`}>Topic 1</Link>
        </li>
        <li>
          <Link to={`${match.path}/topic2`}>Topic 2</Link>
        </li>
      </ul>

      <hr />

      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
};

class RouterTest extends Component {
  render() {
    return (
      <div className="router-test">
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
            </ul>
            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/topics" component={Topics} />
          </div>
        </Router>
      </div>
    );
  }
}

export default RouterTest;
