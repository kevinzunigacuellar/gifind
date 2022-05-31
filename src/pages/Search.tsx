import { useParams } from 'solid-app-router'
import { createResource, Suspense, For, createMemo } from 'solid-js'
import Subtitle from '../components/Subtitle'

const fechGifs = async (query: string) => {
  const res = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${
      import.meta.env.VITE_API_KEY
    }&limit=15&q=${query}`
  )
  const { data } = await res.json()
  const gifs = data.map(({ id, images }) => {
    const { webp, width, height } = images.fixed_width_downsampled
    return {
      id,
      url: webp,
      width,
      height,
    }
  })
  return gifs
}

export default function Search() {
  const params = useParams()
  const query = createMemo(() => params.query)
  const [gifs] = createResource(query, fechGifs)

  return (
    <>
      <Subtitle text="🔍 Search results" />
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Suspense fallback={null}>
          <For each={gifs()}>
            {gif => (
              <img
                src={gif.url}
                alt={gif.id}
                width={gif.width}
                height={gif.height}
                class="rounded-lg w-full object-cover h-full"
                loading="lazy"
              />
            )}
          </For>
        </Suspense>
      </div>
    </>
  )
}
