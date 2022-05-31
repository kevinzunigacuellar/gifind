import { createResource, For } from 'solid-js'
import Subtitle from '../components/Subtitle'

const fetchTrendingGifs = async () => {
  const res = await fetch(
    'https://api.giphy.com/v1/gifs/trending?api_key=kVePfJ4smdAF1OyaGHxq8LDms0aoXC0o&limit=20'
  )
  const { data } = await res.json()
  const trendingGifs = data.map(({ id, images }) => {
    const { webp, width, height } = images.fixed_height
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
      <div class="flex gap-2 overflow-x-auto snap-x snap-mandatory rounded-lg overflow-hidden">
        <For each={trendingGifs()}>
          {gif => (
            <img
              src={gif.url}
              alt={gif.id}
              width={gif.width}
              height={gif.height}
              class="rounded-lg snap-end"
            />
          )}
        </For>
      </div>
    </section>
  )
}
