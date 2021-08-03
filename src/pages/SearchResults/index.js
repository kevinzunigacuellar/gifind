import ListOfGifs from 'components/ListOfGifs'
import SearchTitle from 'components/SearchTitle'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export default function SearchResults() {
  const { query } = useParams()
  return (
    <>
      <Helmet>
        <title>{`Gifind Search | ${query}`}</title>
      </Helmet>
      <SearchTitle>{`Search: ${query}`}</SearchTitle>
      <ListOfGifs query={query} />
    </>
  )
}
