import axios from 'axios'
import { API_KEY } from 'services/settings'
const fromApitoResponseGifs = apiResponse => {
  const { data } = apiResponse.data
  const gifs = data.map(gif => {
    const { id, title, images } = gif
    const { url } = images.original
    return { id, title, url }
  })
  return gifs
}

export default async function getGifs({
  query = 'morty',
  limit = 25,
  page = 0,
} = {}) {
  try {
    const response = await axios
      .get('https://api.giphy.com/v1/gifs/search', {
        params: {
          api_key: API_KEY,
          q: query,
          limit: limit,
          offset: page * limit,
          rating: 'g',
          lang: 'en',
        },
      })
      .then(fromApitoResponseGifs)
    return response
  } catch (err) {
    return err
  }
}
