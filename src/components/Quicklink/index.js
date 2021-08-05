import React from 'react'
import { Link } from 'react-router-dom'

function Quicklink({ title }) {
  return (
    <Link to={`/search/${title}/g`}>
      <div
        className='flex flex-col justify-center items-center border rounded-md p-2 mb-2 border-gray-200 dark:border-gray-700 dark:hover:border-gray-300 hover:text-gray-800 dark:hover:text-gray-100 dark:hover:bg-gray-900 hover:shadow cursor-pointer'
        style={{ minWidth: '4rem' }}>
        <p className='text-sm text-gray-500 dark:text-gray-300'>{title}</p>
      </div>
    </Link>
  )
}

export default React.memo(Quicklink)
