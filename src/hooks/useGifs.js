import { useState, useEffect } from 'react'
import getGifs from 'services/getGifs'

const INITIAL_PAGE = 0

export default function useGifs({ query, rating }) {
  const [loading, setLoading] = useState(false)
  const [gifs, setGifs] = useState([])
  const [page, setPage] = useState(INITIAL_PAGE)
  const [loadingNextPage, setLoadingNextPage] = useState(false)

  useEffect(() => {
    setLoading(true)
    getGifs({ query, rating }).then(gifs => {
      setGifs(gifs)
      setLoading(false)
    })
  }, [query, rating])

  useEffect(() => {
    if (page === INITIAL_PAGE) return
    setLoadingNextPage(true)
    getGifs({ query, page, rating }).then(nextGifs => {
      setGifs(prevGifs => prevGifs.concat(nextGifs))
    })
    setLoadingNextPage(false)
  }, [page, query, rating])

  return { loading, gifs, setPage, loadingNextPage }
}
