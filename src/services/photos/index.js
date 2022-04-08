import axios from 'axios'

export const get = async () => {
  const response = await axios({
    method: 'GET',
    baseURL: process.env.REACT_APP_API_BASE_URL,
    url: '/photos',
    responseType: 'json'
  })
  return response.data
}
