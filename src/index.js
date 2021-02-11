import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Repo from "./components/Repo";
import Favourites from "./components/Favourites";
import { NavLink } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const activeStyle = { color: "#F15B2A" };
ReactDOM.render(
  <Router>
    <nav className="mt-5 d-flex justify-content-center">
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      {/* <NavLink to="/repos" activeStyle={activeStyle}>
        Repos
      </NavLink> */}
      {" | "}
      <NavLink to="/favs" activeStyle={activeStyle}>
        Favourites
      </NavLink>
    </nav>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route
        path="/repos/:owner/:fullname"
        exact
        render={(props) => <Repo {...props} />}
      />
      <Route exact path="/favs">
        <Favourites />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);
