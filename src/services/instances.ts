import axios from 'axios'

export const API_GITHUB_USER = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_GITHUB}`,
  method: 'get'
})
