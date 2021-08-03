import useSingleGif from 'hooks/useSingleGif'
export default function NotFound() {
  const { gifInfo } = useSingleGif('3o6Zt6ML6BklcajjsA')
  const { url, id } = gifInfo
  return (
    <div className='flex flex-col items-center'>
      <p className='font-sans font-semibold text-2xl py-2 uppercase tracking-wider'>
        Error 404: Not found
      </p>
      <div>
        <img
          src={url}
          alt={id}
          className='object-contain w-full sm:w-auto rounded-md shadow-lg'
        />
      </div>
    </div>
  )
}
