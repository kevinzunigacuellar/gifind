import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from 'Layout'
import Home from 'pages/Home'
import Details from 'pages/Details'
import SearchResults from 'pages/SearchResults'

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/search/:query' component={SearchResults} />
          <Route path='/gif/:id' component={Details} />
          <Route path='/' component={Home} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
