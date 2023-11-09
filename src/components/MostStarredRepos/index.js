import {Component} from 'react'
import MostStarredReposLitItems from '../MostStarredReposLitItems'
import './index.css'

class MostStarredRepos extends Component {
  state = {
    mostStarredRepostList: [],
  }

  componentDidMount() {
    this.getMostStarredReposList()
  }

  getMostStarredReposList = async () => {
    const url =
      'https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc'
    const options = {
      headers: {
        Authorization: `Bearer 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`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.items.map(eachItem => ({
        createdAt: eachItem.created_at,
        id: eachItem.id,
        description: eachItem.description,
        openIssues: eachItem.open_issues,
        fullName: eachItem.full_name,
        owner: {
          avatarUrl: eachItem.owner.avatar_url,
          id: eachItem.owner.id,
          login: eachItem.owner.login,
        },
        updatedAt: eachItem.updated_at,
        stargazersCount: eachItem.stargazers_count,
      }))
      this.setState({mostStarredRepostList: updatedData})
    }
  }

  render() {
    const {mostStarredRepostList} = this.state
    console.log(mostStarredRepostList)
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
        <ul className="list_container">
          {mostStarredRepostList.map(eachItem => (
            <MostStarredReposLitItems key={eachItem.id} items={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default MostStarredRepos
