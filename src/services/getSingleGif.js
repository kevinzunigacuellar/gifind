import axios from 'axios'
import { API_KEY } from 'services/settings'

const fromApitoSingleGif = apiResponse => {
  const { data } = apiResponse.data
  const { type, title, images, id, rating } = data
  const { url } = images.original
  return { type, title, id, rating, url }
}

export default async function getSingleGif(id) {
  try {
    const res = await axios
      .get(`https://api.giphy.com/v1/gifs/${id}`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then(fromApitoSingleGif)
    return res
  } catch (err) {
    console.error(err)
  }
}
