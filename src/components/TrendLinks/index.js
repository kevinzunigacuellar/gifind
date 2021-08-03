import Quicklink from 'components/Quicklink'
import Spinner from 'components/Spinner'
import useTrends from 'hooks/useTrends'

export default function TrendLinks() {
  const { loading, trending } = useTrends()
  return (
    <div className='flex flex-row flex-wrap space-x-2'>
      {loading ? (
        <Spinner />
      ) : (
        trending.map(trend => <Quicklink title={trend} key={trend} />)
      )}
    </div>
  )
}
