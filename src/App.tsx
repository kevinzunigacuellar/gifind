import { Routes, Route } from 'solid-app-router'
import Home from './pages/Home'
import Header from './components/Header'
import Search from './pages/Search'

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
