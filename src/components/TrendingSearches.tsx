import { createResource, For, Suspense } from 'solid-js'
import Subtitle from './Subtitle'
import { Link } from 'solid-app-router'

const fetchTrendingSearches = async () => {
  const res = await fetch(
    `https://api.giphy.com/v1/trending/searches?api_key=${import.meta.env.VITE_API_KEY}`
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
        <Suspense fallback={<TrendingSearchesPlaceholder />}>
          <For each={trendingSearches()}>
            {search => (
              <Link href={`/search/${search}`}>
                <p class="inline-block px-4 py-1 border text-zinc-500 hover:shadow dark:hover:shadow-black/50 dark:border-zinc-800 dark:text-zinc-500 dark:hover:text-zinc-300 hover:text-zinc-900 rounded-lg">
                  {search}
                </p>
              </Link>
            )}
          </For>
        </Suspense>
      </div>
    </section>
  )
}

function TrendingSearchesPlaceholder() {
  return (
    <>
      <div class="h-9 w-32 bg-zinc-300 dark:bg-zinc-800 rounded-lg animate-pulse"></div>
      <div class="h-9 w-60 bg-zinc-300 dark:bg-zinc-800 rounded-lg animate-pulse"></div>
      <div class="h-9 w-48 bg-zinc-300 dark:bg-zinc-800 rounded-lg animate-pulse"></div>
      <div class="h-9 w-32 bg-zinc-300 dark:bg-zinc-800 rounded-lg animate-pulse"></div>
      <div class="h-9 w-60 bg-zinc-300 dark:bg-zinc-800 rounded-lg animate-pulse"></div>
      <div class="h-9 w-48 bg-zinc-300 dark:bg-zinc-800 rounded-lg animate-pulse"></div>
      <div class="h-9 w-60 bg-zinc-300 dark:bg-zinc-800 rounded-lg animate-pulse"></div>
      <div class="h-9 w-32 bg-zinc-300 dark:bg-zinc-800 rounded-lg animate-pulse"></div>
      <div class="h-9 w-32 bg-zinc-300 dark:bg-zinc-800 rounded-lg animate-pulse"></div>
      <div class="h-9 w-48 bg-zinc-300 dark:bg-zinc-800 rounded-lg animate-pulse"></div>
      <div class="h-9 w-60 bg-zinc-300 dark:bg-zinc-800 rounded-lg animate-pulse"></div>
      <div class="h-9 w-48 bg-zinc-300 dark:bg-zinc-800 rounded-lg animate-pulse"></div>
    </>
  )
}
