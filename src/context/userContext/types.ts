import { GithubUser, GithubRepos } from '@/services/types'

export interface UserContextDate {
  userInfos: GithubUser
  repositorys: GithubRepos
}
