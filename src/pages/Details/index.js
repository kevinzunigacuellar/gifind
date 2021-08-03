import { Redirect, useParams } from 'react-router-dom'
import useSingleGif from 'hooks/useSingleGif'
import Spinner from 'components/Spinner'
import GifInfoDisplay from 'components/GifInfoDisplay'
import { Helmet } from 'react-helmet'

export default function Details() {
  const { id } = useParams()
  const { loading, gifInfo, isError } = useSingleGif(id)
  const { type, title, rating, url } = gifInfo

  if (isError) return <Redirect to='/404' />

  return (
    <div>
      <Helmet>
        <title>{`Gifind | ${title || id}`}</title>
      </Helmet>
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
