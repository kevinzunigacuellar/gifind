import useSingleGif from 'hooks/useSingleGif'
export default function NoGifsFound() {
  const { gifInfo } = useSingleGif('3oEjHCPIl3vhWa2VcA')
  const { url, id } = gifInfo
  return (
    <div className='flex flex-col items-center'>
      <p className='font-semibold text-2xl py-2'>
        Sorry, we couldn't find any gifs
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
