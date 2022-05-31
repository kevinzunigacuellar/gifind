import { createResource, For } from 'solid-js'
import Subtitle from './Subtitle'

const fetchTrendingSearches = async () => {
  const res = await fetch(
    'https://api.giphy.com/v1/trending/searches?api_key=kVePfJ4smdAF1OyaGHxq8LDms0aoXC0o'
  )
  const { data } = await res.json()
  return data
}

export default function TrendingSearches() {
  const [trendingSearches] = createResource<string[]>(fetchTrendingSearches)

  return (
    <section class="mt-6">
      <Subtitle text="🎉 Trending searches" />
      <div class="flex gap-2 flex-wrap">
        <For each={trendingSearches()}>
          {search => (
            <a
              href={`/search/${search}`}
              class="inline-block px-4 py-1 border text-zinc-500 hover:shadow dark:hover:shadow-black/50 dark:border-zinc-800 dark:text-zinc-500 dark:hover:text-zinc-300 hover:text-zinc-900 rounded-lg"
            >
              {search}
            </a>
          )}
        </For>
      </div>
    </section>
  )
}
