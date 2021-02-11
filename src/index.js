import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <Router>
    {/* <Switch> */}
    <Route exact path="/">
      <App />
    </Route>
    {/* </Switch> */}
  </Router>,
  document.getElementById("root")
);
