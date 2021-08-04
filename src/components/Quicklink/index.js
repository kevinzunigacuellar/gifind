import React from 'react'
import { Link } from 'react-router-dom'

function Quicklink({ title }) {
  return (
    <Link to={`/search/${title}/g`}>
      <div
        className='flex flex-col justify-center items-center border rounded-md p-2 mb-2 border-gray-200 text-gray-500 hover:text-gray-800  hover:shadow cursor-pointer'
        style={{ minWidth: '4rem' }}>
        <p className='text-sm'>{title}</p>
      </div>
    </Link>
  )
}

export default React.memo(Quicklink)
