import { useCallback, useRef } from 'react'
import useGifs from 'hooks/useGifs'
import Spinner from 'components/Spinner'
import Gif from 'components/Gif'
import NoGifsFound from 'components/NoGifsFound'
export default function ListOfGifs({ query }) {
  const { gifs, loading, setPage } = useGifs({ query })
  const target = useRef(null)

  const lastGifElement = useCallback(
    node => {
      if (loading) return
      if (target.current) target.current.disconnect()
      target.current = new IntersectionObserver(
        entries => {
          if (entries[0].isIntersecting) {
            setPage(prevPage => prevPage + 1)
          }
        },
        { rootMargin: '100px' }
      )
      if (node) target.current.observe(node)
    },
    [loading, setPage]
  )
  if (gifs[0] === undefined) return <NoGifsFound />
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className='grid grid-cols-1 gap-y-2 gap-x-2 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
          {gifs.map(({ id, url }, index) => {
            if (gifs.length === index + 1) {
              return (
                <div
                  key={id + url}
                  ref={lastGifElement}
                  className='rounded-lg overflow-hidden border-4 border-blue-600 border-opacity-0 hover:border-opacity-90'>
                  <Gif id={id} url={url} />
                </div>
              )
            } else {
              return (
                <div
                  key={id + url}
                  className='rounded-lg overflow-hidden border-4 border-blue-600 border-opacity-0 hover:border-opacity-90'>
                  <Gif id={id} url={url} />
                </div>
              )
            }
          })}
        </div>
      )}
    </>
  )
}
