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
      <div class="flex gap-2 overflow-x-auto rounded-lg overflow-hidden">
        <Suspense fallback={<TrendingGifsPlaceholder />}>
          <For each={trendingGifs()}>
            {gif => (
              <img
                src={gif.url}
                alt={gif.id}
                width={gif.width}
                height={gif.height}
                class="rounded-lg"
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
      <div class="h-[200px] w-60 bg-slate-300 rounded-lg animate-pulse"></div>
      <div class="h-[200px] w-60 bg-slate-300 rounded-lg animate-pulse"></div>
      <div class="h-[200px] w-60 bg-slate-300 rounded-lg animate-pulse"></div>
      <div class="h-[200px] w-60 bg-slate-300 rounded-lg animate-pulse"></div>
    </>
  )
}
