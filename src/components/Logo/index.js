import { Link } from 'react-router-dom'
export default function Logo() {
  return (
    <div className='mx-auto'>
      <Link to='/'>
        <h1 className='py-3 text-7xl antialiased text-center cursor-pointer text-blue-600 dark:text-purple-600'>
          Gifind
        </h1>
      </Link>
    </div>
  )
}
