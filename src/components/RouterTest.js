import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

const Home = p => <h1>Home</h1>;
const Topic = ({ match }) => (
  <div>
    <h1>{match.params.id}</h1>
  </div>
);
const RegexComponent = ({ match }) => (
  <div>
    <strong>The Order is:</strong> {match.params.order}
  </div>
);

const Topics = ({ match }) => {
  return (
    <div>
      <h1>Topics</h1>
      <ul>
        <li>
          <NavLink to={`${match.url}/topic1`} className="links">
            Topic 1
          </NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/topic2`} className="links">
            Topic 2
          </NavLink>
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
          <div className="header">
            <ul>
              <li>
                <NavLink
                  exact
                  activeClassName="active-header"
                  to="/"
                  className="links"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  activeClassName="active-header"
                  to="/topics"
                  className="links"
                >
                  Topics
                </NavLink>
              </li>
            </ul>
            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/topics" component={Topics} />
            <Route path={`/:order(asc|desc)`} component={RegexComponent} />
          </div>
        </Router>
      </div>
    );
  }
}

export default RouterTest;
