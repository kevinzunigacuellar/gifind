import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const RATINGS = ['g', 'pg', 'pg-13', 'r']

export default function BrowserBar() {
  const [query, setQuery] = useState('')
  const [rating, setRating] = useState('g')
  const history = useHistory()

  const handleChange = e => {
    setQuery(e.target.value.toLowerCase())
  }
  const handleChangeRating = e => {
    setRating(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    history.push(`/search/${query}/${rating}`)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex space-x-1 sm:space-x-2 w-full justify-center items-center'>
      <input
        type='text'
        spellCheck='false'
        onChange={handleChange}
        value={query}
        placeholder='Type a GIF here'
        className='w-1/2 max-w-lg py-2 px-3 border border-gray-300 placeholder-gray-500 rounded-lg shadow-sm hover:shadow-md focus:outline-none dark:bg-gray-800 dark:border-gray-700 dark:focus:border-purple-400 dark:focus:ring-purple-400 dark:text-gray-300 focus:border-blue-400 focus:ring-1 focus:ring-blue-400'></input>
      <select
        onChange={handleChangeRating}
        value={rating}
        className='w-24 border uppercase py-2 px-3 dark:text-gray-300 dark:bg-gray-800 border-gray-300 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md focus:outline-none focus:border-blue-400 focus:ring-1 dark:focus:border-purple-400 dark:focus:ring-purple-400'>
        {RATINGS.map(rating => (
          <option key={rating}>{rating}</option>
        ))}
      </select>
      <button
        type='submit'
        className='py-2 px-3 border border-transparent rounded-md shadow-sm text-md focus:outline-none text-white dark:text-gray-300 bg-blue-600 dark:bg-purple-600 dark:hover:bg-purple-700 hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 dark:focus:ring-purple-400 dark:ring-offset-gray-900 focus:ring-blue-400 cursor-pointer'>
        Search
      </button>
    </form>
  )
}
