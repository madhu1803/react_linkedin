import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Feed, Profile, Page404 } from "./pages/index";
export default class App extends Component {
  render() {
    return (
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path={["/feed", "/"]} component={Feed} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/page404" component={Page404} />
          <Redirect from="*" exact={true} to="/page404" />
        </Switch>
      </Router>
    );
  }
}
