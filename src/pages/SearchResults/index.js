import ListOfGifs from 'components/ListOfGifs'
import SearchTitle from 'components/SearchTitle'
import { useParams } from 'react-router-dom'

export default function SearchResults() {
  const { query } = useParams()
  return (
    <>
      <SearchTitle>{query}:</SearchTitle>
      <ListOfGifs query={query} />
    </>
  )
}
