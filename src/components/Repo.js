import React, { Component } from "react";

class Repo extends Component {
  render() {
    let { match } = this.props;
    console.log("matched", match.url);
    return (
      <>
        <h3>Repo</h3>
        <div>Listing All Repos</div>
      </>
    );
  }
}

export default Repo;
