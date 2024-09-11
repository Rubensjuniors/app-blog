import axios from 'axios'

export const GITHUB_API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL_API_GITHUB,
  method: 'get'
})
