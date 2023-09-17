import { API_GITHUB_USER } from './instances'
import { GithubRepos, GithubUser } from './types'

export const getGithubUser = async (): Promise<GithubUser> => {
  const reponse = await API_GITHUB_USER('')
  return await reponse.data
}
export const getGithubRepos = async (): Promise<GithubRepos> => {
  const reponse = await API_GITHUB_USER('/repos')
  return await reponse.data
}
