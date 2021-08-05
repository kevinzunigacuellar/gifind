import { useState } from 'react'
import Logo from 'components/Logo'
import BrowserBar from 'components/BrowserBar'
import { SunIcon, MoonIcon } from '@heroicons/react/outline'
export default function Layout({ children }) {
  const [dark, setDark] = useState(false)
  const handleToggle = () => {
    setDark(prevState => !prevState)
  }
  return (
    <div className={dark ? 'dark' : ''}>
      <div className='relative dark:bg-gray-900 bg-white flex flex-col justify-center min-h-screen p-2'>
        <Logo />
        <BrowserBar />
        <div className='container mx-auto py-2 '>{children}</div>
        <div className='absolute top-0 right-0 m-2'>
          <button
            onClick={handleToggle}
            className='p-2 border rounded-lg dark:border-gray-700 dark:hover:border-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800'>
            {dark ? (
              <SunIcon className='w-6 h-6 text-white' />
            ) : (
              <MoonIcon className='h-6 w-6' />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
