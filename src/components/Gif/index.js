import React from 'react'
import { Link } from 'react-router-dom'
const Gif = ({ id, url }) => {
  return (
    <Link to={`/gif/${id}`}>
      <img src={url} alt={id} className='w-full h-full object-cover' />
    </Link>
  )
}

export default React.memo(Gif)
