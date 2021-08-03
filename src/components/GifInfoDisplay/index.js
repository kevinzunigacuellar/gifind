import DetailText from 'components/DetailText'

export default function GifInfoDisplay({ title, type, rating, url, id }) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 py-2 md:py-8'>
      <div className='flex justify-end'>
        <img
          src={url}
          alt={title}
          className='object-contain w-full sm:w-auto rounded-md shadow-lg'
        />
      </div>
      <div className='flex flex-col justify-center pl-4 py-2'>
        <div className='font-sans font-semibold text-lg py-2 tracking-wider uppercase'>
          {title || 'No title'}
        </div>
        <DetailText>ID: {id}</DetailText>
        <DetailText>Type: {type}</DetailText>
        <DetailText>Rating: {rating}</DetailText>
      </div>
    </div>
  )
}
