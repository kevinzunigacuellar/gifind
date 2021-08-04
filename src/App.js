import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import Layout from 'Layout'
import Home from 'pages/Home'
import Details from 'pages/Details'
import SearchResults from 'pages/SearchResults'
import NotFound from 'pages/NotFound'
function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/search/:query/:rating?' component={SearchResults} />
          <Route path='/gif/:id' component={Details} />
          <Route exact={true} path='/' component={Home} />
          <Route path='/404' component={NotFound} />
          <Redirect to='/404' />
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
