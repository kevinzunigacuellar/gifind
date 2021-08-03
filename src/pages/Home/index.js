import Trending from 'components/Trending'
import { Helmet } from 'react-helmet'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Gifind | Search gifs</title>
        <meta name='description' content='Search engine for gifs' />
      </Helmet>
      <Trending />
    </>
  )
}
