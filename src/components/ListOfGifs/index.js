import useGifs from 'hooks/useGifs'
import Spinner from 'components/Spinner'
import Gif from 'components/Gif'
import { Waypoint } from 'react-waypoint'
export default function ListOfGifs({ query }) {
  const { gifs, loading, setPage } = useGifs({ query })

  const loadMoreContent = () => {
    setPage(prevPage => prevPage + 1)
  }
  if (loading) return <Spinner />
  return (
    <div className='grid grid-cols-1 gap-y-2 gap-x-2 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 min-h-screen'>
      {gifs.map(({ id, url }, index) => {
        return (
          <div
            key={id}
            className='rounded-lg overflow-hidden border-4 border-blue-600 border-opacity-0 hover:border-opacity-90 max-h-80'>
            <Gif id={id} url={url} />
            {index === gifs.length - 3 && (
              <Waypoint onEnter={loadMoreContent} />
            )}
          </div>
        )
      })}
    </div>
  )
}
