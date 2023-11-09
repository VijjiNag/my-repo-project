import {Link} from 'react-router-dom'
import './index.css'

const MostStarredReposLitItems = props => {
  const {items} = props
  const {
    owner,
    fullName,
    description,
    openIssues,
    stargazersCount,
    updatedAt,
    id,
  } = items

  const {avatarUrl} = owner
  return (
    <Link to={`/repos/${fullName}/${id}`} className="link">
      <li className="list-items-container">
        <img className="avatar" src={avatarUrl} alt="avatar" />
        <div className="repo-details-container">
          <h1 className="repo-name">{fullName}</h1>
          <p className="repo-desc">{description}</p>
          <div className="repo-report-container">
            <p className="open-issues">{stargazersCount}</p>
            <p className="open-issues">{openIssues}</p>
            <p className="open-issues">{updatedAt}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default MostStarredReposLitItems
