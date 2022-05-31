import { createSignal } from 'solid-js'

export default function Search() {
  const [search, setSearch] = createSignal('')

  const onSubmit = (e: Event) => {
    e.preventDefault()
  }
  return (
    <form class="relative" onSubmit={onSubmit}>
      <input
        type="search"
        onkeyup={e => setSearch(e.currentTarget.value)}
        class="block w-full rounded-full dark:border-zinc-700 focus:border-transparent dark:placeholder:text-zinc-500 dark:focus:border-transparent text-lg border border-zinc-200 bg-white py-2 pl-5 pr-28 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-zinc-800 dark:text-zinc-300 dark:focus:ring-pink-500 sm:pr-32 placeholder:text-zinc-400 text-zinc-900"
        placeholder="Search for a GIF"
      />
      <button
        type="submit"
        class="absolute top-[3px] right-[3px] flex w-24 items-center justify-center rounded-full text-white bg-indigo-600 py-2 font-semibold hover:bg-indigo-500 focus:outline-none focus:ring-2  focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-zinc-100 disabled:text-zinc-600 dark:bg-pink-700 dark:text-white dark:hover:bg-pink-600 dark:focus:ring-pink-500 dark:focus:ring-offset-zinc-800 dark:disabled:bg-zinc-900 dark:disabled:text-zinc-400 sm:w-28"
      >
        Search
      </button>
    </form>
  )
}
