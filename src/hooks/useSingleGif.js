import { useEffect, useState } from 'react'
import getSingleGif from 'services/getSingleGif'
export default function useSingleGif(id) {
  const [loading, setLoading] = useState(false)
  const [gifInfo, setGifInfo] = useState({})

  useEffect(() => {
    setLoading(true)
    getSingleGif(id).then(gifInfo => {
      setGifInfo(gifInfo)
      setLoading(false)
    })
  }, [id])

  return { loading, gifInfo }
}
