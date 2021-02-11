import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Repo from "./components/Repo";
ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route
        path="/repos/:owner/:fullname"
        exact
        render={(props) => <Repo {...props} />}
      />
    </Switch>
  </Router>,
  document.getElementById("root")
);
