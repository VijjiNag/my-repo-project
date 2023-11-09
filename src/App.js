import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css'
import MostStarredRepos from './components/MostStarredRepos'
import RepoDetails from './components/RepoDetails'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MostStarredRepos} />
      <Route exact path="/repos/owner/:id" component={RepoDetails} />
    </Switch>
  </BrowserRouter>
)

export default App
