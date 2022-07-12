import { createResource, For, Suspense } from 'solid-js'
import Subtitle from '../components/Subtitle'

const fetchTrendingGifs = async () => {
  const res = await fetch(
    `https://api.giphy.com/v1/gifs/trending?api_key=${import.meta.env.VITE_API_KEY}&limit=20`
  )
  const { data } = await res.json()
  const trendingGifs = data.map(({ id, images }) => {
    const { webp, width, height } = images.fixed_height_downsampled
    return {
      id,
      url: webp,
      width,
      height,
    }
  })
  return trendingGifs
}

export default function TrendingGifs() {
  const [trendingGifs] = createResource(fetchTrendingGifs)

  return (
    <section class="mt-8">
      <Subtitle text="🚀 Trending gifs" />
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Suspense fallback={<TrendingGifsPlaceholder />}>
          <For each={trendingGifs()}>
            {gif => (
              <img
                src={gif.url}
                alt={gif.id}
                width={gif.width}
                height={gif.height}
                class="rounded-lg w-full sm:w-auto"
                loading="lazy"
              />
            )}
          </For>
        </Suspense>
      </div>
    </section>
  )
}

function TrendingGifsPlaceholder() {
  return (
    <>
      <div class="w-64 h-48 bg-zinc-300 dark:bg-zinc-800 rounded-lg animate-pulse"></div>
      <div class="w-64 h-48 bg-zinc-300 dark:bg-zinc-800 rounded-lg animate-pulse"></div>
      <div class="w-64 h-48 bg-zinc-300 dark:bg-zinc-800 rounded-lg animate-pulse"></div>
      <div class="w-64 h-48 bg-zinc-300 dark:bg-zinc-800 rounded-lg animate-pulse"></div>
    </>
  )
}
