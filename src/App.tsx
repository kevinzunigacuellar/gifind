import { Routes, Route } from 'solid-app-router'
import { lazy } from 'solid-js'

const Header = lazy(() => import('./components/Header'))
const Search = lazy(() => import('./pages/Search'))
const Home = lazy(() => import('./pages/Home'))

function App() {
  return (
    <>
      <Header />
      <section class="mt-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:query" element={<Search />} />
        </Routes>
      </section>
    </>
  )
}

export default App
