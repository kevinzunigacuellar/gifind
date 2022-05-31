import SearchBar from './SearchBar'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header>
      <div class="flex justify-between mb-4 items-center">
        <a
          href="/"
          class="dark:text-pink-500 text-indigo-500 dark:hover:text-pink-600 hover:text-indigo-500"
        >
          <h1 class="font-semibold text-4xl">🥳 Gifind</h1>
        </a>
        <ThemeToggle />
      </div>
      <SearchBar />
    </header>
  )
}
