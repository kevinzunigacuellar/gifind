import { createSignal, Show } from 'solid-js'

type theme = 'light' | 'dark'

export default function ThemeToggle() {
  const [theme, setTheme] = createSignal<theme>((localStorage.getItem('theme') as theme) || 'light')
  const toggleTheme = () => {
    setTheme(theme() === 'light' ? 'dark' : 'light')
    window.localStorage.setItem('theme', theme())
    if (theme() === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <button
      class="flex justify-center items-center bg-zinc-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-400 p-2 border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-pink-500"
      onClick={toggleTheme}
      type="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 stroke-2 stroke-current fill-transparent"
        viewBox="0 0 24 24"
      >
        <Show
          when={theme() === 'light'}
          fallback={
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          }
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </Show>
      </svg>
    </button>
  )
}
