import { useState, useEffect } from 'react'
import getGifs from 'services/getGifs'

const INITIAL_PAGE = 0

export default function useGifs({ query }) {
  const [loading, setLoading] = useState(false)
  const [gifs, setGifs] = useState([])
  const [page, setPage] = useState(INITIAL_PAGE)
  const [loadingNextPage, setLoadingNextPage] = useState(false)

  useEffect(() => {
    setLoading(true)
    getGifs({ query }).then(gifs => {
      setGifs(gifs)
      setLoading(false)
    })
  }, [query])

  useEffect(() => {
    if (page === INITIAL_PAGE) return
    setLoadingNextPage(true)
    getGifs({ query, page }).then(nextGifs => {
      setGifs(prevGifs => prevGifs.concat(nextGifs))
    })
    setLoadingNextPage(false)
  }, [page, query])

  return { loading, gifs, setPage, loadingNextPage }
}
