import { useParams } from 'react-router-dom'
import useSingleGif from 'hooks/useSingleGif'
import Spinner from 'components/Spinner'
import GifInfoDisplay from 'components/GifInfoDisplay'

export default function Details() {
  const { id } = useParams()
  const { loading, gifInfo } = useSingleGif(id)
  const { type, title, rating, url } = gifInfo

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <GifInfoDisplay
          title={title}
          type={type}
          rating={rating}
          url={url}
          id={id}
        />
      )}
    </div>
  )
}
