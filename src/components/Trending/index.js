import TrendLinks from 'components/TrendLinks'

export default function Trending() {
  return (
    <div className='flex flex-col items-center max-w-4xl mx-auto'>
      <p className='w-full text-left pt-2 pb-3 text-xl text-gray-800 capitalize'>
        Trendring:
      </p>
      <TrendLinks />
    </div>
  )
}
