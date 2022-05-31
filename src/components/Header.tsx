import Search from './Search'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header>
      <div class="flex justify-between mb-6 items-center">
        <h1 class="font-semibold text-4xl dark:text-pink-600 text-indigo-500">🥳 Gifind</h1>
        <ThemeToggle />
      </div>
      <Search />
    </header>
  )
}
