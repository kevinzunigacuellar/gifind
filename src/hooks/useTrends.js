import { useState, useEffect } from 'react'
import getTrendingList from 'services/getTrendingList'

export default function useGifs() {
  const [loading, setLoading] = useState(false)
  const [trending, setTrending] = useState([])

  useEffect(() => {
    setLoading(true)
    getTrendingList().then(trendingList => {
      setTrending(trendingList.slice(0, 8))
      setLoading(false)
    })
  }, [])
  return { loading, trending }
}
