import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

class TopRepo extends Component {
  //   renderRepo = (repo, index) => {
  //     return (
  //       <tr key={index}>
  //         <td colspan="1">{repo.name}</td>
  //         <td colspan="2">{repo.description}</td>
  //         <td colspan="1">{repo.stargazers_count}</td>
  //       </tr>
  //     );
  //   };
  render() {
    let { topRepos } = this.props;
    console.log(topRepos);
    return (
      <>
        <h3>Top Repos</h3>
        {/* <Table striped condensed hover>
          <thead>
            <tr className="align-items-center">
              <th></th>
              <th colspan="1">Name</th>
              <th colspan="3">Description</th>
              <th colspan="1">Stars</th>
            </tr>
          </thead>
          {topRepos && (
            <tbody className="align-items-center">
              {topRepos.map(this.renderRepo)}
            </tbody>
          )}
        </Table> */}
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
          </BootstrapTable>
        </div>
      </>
    );
  }
}
export default TopRepo;
