import axios from 'axios'

const url = 'https://api.github.com/users/rubensjuniors'

export const GITHUB_API = axios.create({
  baseURL: url,
  method: 'get',
})
