import React, { Component } from "react";
import Axios from "axios";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

class Favourites extends Component {
  state = {
    repos: [],
  };
  componentDidMount() {
    Axios.get(`https://git.heroku.com/thawing-shore-29742.git/favRepos`).then(
      (res) => {
        const { result } = res.data;
        this.setState({ repos: result });
        console.log(result);
      }
    );
  }
  render() {
    let repos = this.state;
    console.log("look", repos.repos);
    return (
      <div className="favs">
        <h3>Favs</h3>
        <div className="ml-5 mr-5">
          <BootstrapTable data={repos.repos}>
            <TableHeaderColumn width={"10%"} dataField="owner" isKey>
              Name
            </TableHeaderColumn>
            <TableHeaderColumn width={"50%"} dataField="repoName">
              Description
            </TableHeaderColumn>
            <TableHeaderColumn dataField="stars">Stars</TableHeaderColumn>
            <TableHeaderColumn dataField="issues">
              Open Issues
            </TableHeaderColumn>
            <TableHeaderColumn dataField="forks">Forks</TableHeaderColumn>
          </BootstrapTable>
        </div>
      </div>
    );
  }
}
export default Favourites;
