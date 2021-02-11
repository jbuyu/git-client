import React, { Component } from "react";
import "./Repo.css";
import { AiFillStar } from "react-icons/ai";
import Axios from "axios";
import { Button } from "react-bootstrap";
class Repo extends Component {
  state = {
    repoData: {},
  };
  componentDidMount() {
    Axios.get(`https://api.github.com${this.props.match.url}`).then((res) => {
      const repoData = res.data;
      console.log(repoData);
      this.setState({ repoData });
    });
  }
  render() {
    let { repoData } = this.state;
    return (
      <div className="repo">
        <h3>Repo</h3>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Owner</th>
              <th scope="col">Name</th>
              <th scope="col">Forks</th>
              <th scope="col">Stars</th>
              <th scope="col">open_issues</th>
              <th scope="col">Feedback</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {repoData && repoData.owner && repoData.owner.login && (
                <td>{repoData.owner.login}</td>
              )}
              <td>{repoData.name}</td>
              <td>{repoData.open_issues}</td>
              <td>{repoData.forks}</td>
              <td>{repoData.stargazers_count}</td>
              <td>
                <Button variant="light">
                  <AiFillStar />
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Repo;
