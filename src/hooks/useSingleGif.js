import { useEffect, useState } from 'react'
import getSingleGif from 'services/getSingleGif'
export default function useSingleGif(id) {
  const [loading, setLoading] = useState(false)
  const [gifInfo, setGifInfo] = useState({})
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    setLoading(true)
    getSingleGif(id)
      .then(gifInfo => {
        setGifInfo(gifInfo)
        setLoading(false)
      })
      .catch(err => {
        setLoading(false)
        setIsError(true)
      })
  }, [id])

  return { loading, gifInfo, isError }
}
