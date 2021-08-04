import Logo from 'components/Logo'
import BrowserBar from 'components/BrowserBar'

export default function Layout({ children }) {
  return (
    <div className='flex flex-col justify-center min-h-screen p-2'>
      <Logo />
      <BrowserBar />
      <div className='container mx-auto py-2'>{children}</div>
      <div>foter</div>
    </div>
  )
}
