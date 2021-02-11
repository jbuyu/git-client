import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./TopRepos.css";

class TopRepo extends Component {
  cellButton(cell, row, enumObject) {
    return (
      <Button
        onClick={this.showDetails.bind(this, row)}
        cell={cell}
        row={row}
        // rowIndex={rowIndex}
        variant="outline-dark"
      >
        <Link to={"/repos/" + row.owner.login + "/" + row.name}>View</Link>
      </Button>
    );
  }
  showDetails = (row) => {
    console.log(row.full_name);
  };
  render() {
    let { topRepos } = this.props;
    console.log(topRepos);
    return (
      <>
        <h3>Top Repos</h3>

        <div className="ml-5 mr-5">
          <BootstrapTable data={topRepos}>
            <TableHeaderColumn width={"10%"} dataField="name" isKey>
              Name
            </TableHeaderColumn>
            <TableHeaderColumn width={"50%"} dataField="description">
              Description
            </TableHeaderColumn>
            <TableHeaderColumn dataField="stargazers_count">
              Stars
            </TableHeaderColumn>
            <TableHeaderColumn dataField="open_issues_count">
              Open Issues
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="sessionDetails"
              dataFormat={this.cellButton.bind(this)}
            ></TableHeaderColumn>
          </BootstrapTable>
        </div>
      </>
    );
  }
}
export default TopRepo;
