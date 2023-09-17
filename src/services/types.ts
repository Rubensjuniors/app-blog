export interface GithubUser {
  avatar_url: string
  url: string
  name: string
  bio: string
}

export interface GithubRepos {
  id: number
  name: string
  private: boolean
  description: string
  url: string
  owner: {
    login: string
  }
}
