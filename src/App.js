import React, { Component } from "react";
import "./App.css";
import TopRepo from "./components/TopRepos";
import Axios from "axios";

class App extends Component {
  state = {
    topRepos: {},
  };
  componentDidMount() {
    Axios.get(
      `https://api.github.com/search/repositories?q=stars:%3E1&sort=stars`
    ).then((res) => {
      const topRepos = res.data.items;
      this.setState({ topRepos });
      console.log(topRepos);
    });
  }
  render() {
    return (
      <div className="App">
        <TopRepo />
      </div>
    );
  }
}

export default App;
