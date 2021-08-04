import DetailText from 'components/DetailText'
import Copy from 'components/Icons/Copy'
import { CopyToClipboard } from 'react-copy-to-clipboard'
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
        <div className='mt-1'>
          <CopyToClipboard text={url}>
            <button className='p-2 rounded-md focus:outline-none bg-gray-100 hover:bg-gray-200 focus:ring-2 focus:ring-offset-1 focus:ring-gray-800 cursor-pointer '>
              <Copy />
            </button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  )
}
