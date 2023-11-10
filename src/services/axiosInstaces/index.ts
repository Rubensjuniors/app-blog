import axios from 'axios'

const isDev = process.env.NODE_ENV === 'production' ? process.env.URL_API_GITHUB : 'https://api.github.com/users/rubensjuniors'

export const GITHUB_API = axios.create({
  baseURL: isDev,
  method: 'get'
})
