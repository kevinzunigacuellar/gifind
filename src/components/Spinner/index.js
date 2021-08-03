export default function Spinner() {
  return (
    <div className='flex justify-center content-center'>
      <div
        className='h-10 w-10 m-2 rounded-full border-blue-600 border-4 animate-spin'
        style={{ borderLeftColor: 'transparent' }}></div>
    </div>
  )
}
