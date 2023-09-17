export interface userInfosData {
  avatar_url: string
  url: string
  name: string
  bio: string
}

export interface repositorysData {
  id: number
  name: string
  private: boolean
  description: string
  url: string
  owner: {
    login: string
  }
}

export interface UserContextDate {
  userInfos: userInfosData
  repositorys: repositorysData
}
