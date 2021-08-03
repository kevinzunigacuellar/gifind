import axios from 'axios'
import { API_KEY } from 'services/settings'
const fromApiResponsetoTrendingList = apiResponse => {
  const { data } = apiResponse.data
  return data
}

export default async function getTrendingList() {
  try {
    const response = await axios
      .get('https://api.giphy.com/v1/trending/searches', {
        params: {
          api_key: API_KEY,
        },
      })
      .then(fromApiResponsetoTrendingList)

    return response
  } catch (err) {
    console.log(err)
  }
}
