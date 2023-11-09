import {Component} from 'react'
import './index.css'

class RepoDetails extends Component {
  render() {
    return (
      <div className="most-starred-repost-container">
        <div className="logo-container">
          <img
            src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
            alt="logo"
            className="logo"
          />
          <h1 className="head">Most Starred Repos</h1>
        </div>
      </div>
    )
  }
}

export default RepoDetails
