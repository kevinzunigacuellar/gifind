import DetailText from 'components/DetailText'
import { DuplicateIcon, ClipboardCheckIcon } from '@heroicons/react/outline'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import useCopied from 'hooks/useCopied'

export default function GifInfoDisplay({ title, type, rating, url, id }) {
  const { copied, setCopied } = useCopied()

  const handleCopied = () => {
    setCopied(true)
  }
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
        <div className='font-sans font-semibold text-lg py-2 tracking-wider uppercase dark:text-gray-300'>
          {title || 'No title'}
        </div>
        <DetailText>ID: {id}</DetailText>
        <DetailText>Type: {type}</DetailText>
        <DetailText>Rating: {rating}</DetailText>
        <div className='mt-1'>
          <CopyToClipboard text={url} onCopy={handleCopied}>
            <button className='p-2 mt-2 rounded-md bg-gray-200 dark:bg-gray-800 dark:text-gray-400  dark:hover:border-gray-500 dark:hover:text-gray-200 hover:bg-gray-300 border-2 border-transparent hover:border-gray-800 cursor-pointer'>
              {copied ? (
                <ClipboardCheckIcon className='h-6 w-6' />
              ) : (
                <DuplicateIcon className='h-6 w-6' />
              )}
            </button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  )
}
