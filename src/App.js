import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import About from "./About";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Redirect
} from "react-router-dom";
import Header from "./Header";

const Page1 = () => <h1>I'm on page 11111111</h1>;
const Page2 = ({ match }) => {
  return (
    <>
      <h1>Page2</h1>

      <Switch>
        <Route
          exact
          path={`${match.url}/apples`}
          component={() => <h1>🍎</h1>}
        />
        <Route
          exact
          path={`${match.url}/beans`}
          component={() => <h1>Beans!!</h1>}
        />
        <Redirect to={`${match.url}`} />
      </Switch>
    </>
  );
};
const Page = ({ match }) => <h2>{match.params.id}</h2>;
const Home = ({ location, match }) => (
  <>
    Home,{JSON.stringify(location)}
    {JSON.stringify(match)}
  </>
);
const NotFound = () => <h1>Whoops. You broke the internet again.</h1>;
// route component has default props history/location/match. we can
// switch only renders one component at a time according to the macthing

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <>
            <Header />
            <nav>
              <NavLink to="/page1" activeClassName="selected">
                Page1{" "}
              </NavLink>{" "}
              <NavLink to="/fruits" activeClassName="selected">
                fruits
              </NavLink>{" "}
              <NavLink exact to="/" activeClassName="selected">
                Home{" "}
              </NavLink>{" "}
            </nav>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/page1" component={Page1} />
              <Route path="/fruits" component={Page2} />
              <Route path="/page/:id" component={Page} />
              <Route path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>
          </>
        </Router>
      </>
    );
  }
}

export default App;
