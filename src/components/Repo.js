import React, { Component } from "react";
import "./Repo.css";
import { AiFillStar } from "react-icons/ai";
import Axios from "axios";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

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

  //toast
  notify = () =>
    toast.success("🦄 Stirrred!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  //feedback
  buttonFeed = () => {
    let { repoData } = this.state;
    const newRepoData = {
      owner: repoData.owner.login,
      repoName: repoData.name,
      issues: repoData.open_issues,
      forks: repoData.forks,
      stars: repoData.stargazers_count,
    };
    console.log("click", newRepoData);
    Axios.post(
      `https://thawing-shore-29742.herokuapp.com/repos`,
      newRepoData
    ).then((res) => {
      console.log(res);
      console.log(res.data);
    });
    this.notify();
  };
  render() {
    let { repoData } = this.state;
    return (
      <div className="repo">
        <h3>Repo</h3>
        <table className="table">
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
                <Button variant="dark" onClick={this.buttonFeed}>
                  <AiFillStar />
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
        <ToastContainer />
      </div>
    );
  }
}

export default Repo;
