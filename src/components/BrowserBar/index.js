import { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function BrowserBar() {
  const [query, setQuery] = useState('')
  const history = useHistory()

  const handleChange = e => {
    setQuery(e.target.value.toLowerCase())
  }
  const handleSubmit = e => {
    e.preventDefault()
    history.push(`/search/${query}`)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex space-x-2 w-full justify-center items-center'>
      <input
        type='text'
        spellCheck='false'
        onChange={handleChange}
        value={query}
        placeholder='Type a GIF here'
        className='w-full border  py-2 px-3 border-gray-300 rounded-lg shadow-sm hover:shadow-md focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 max-w-md'></input>
      <button
        type='submit'
        className='justify-center py-2 px-3 border border-transparent rounded-md shadow-sm text-md focus:outline-none text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer'>
        Search
      </button>
    </form>
  )
}
