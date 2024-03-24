import axios from 'axios'

const BASE_URL = import.meta.env.VITE_BASE_URL
const API_KEY = import.meta.env.VITE_API_KEY
console.log(BASE_URL)

const instance = axios.create({
  baseURL: `${BASE_URL}`,
  timeout: 2500,
  params: { key: API_KEY },
})

export default instance

export const setAuthToken = (token) => {
  if (token) {
    instance.defaults.headers.common['Authorization'] = token
  } else {
    delete instance.defaults.headers.common['Authorization']
  }
}
