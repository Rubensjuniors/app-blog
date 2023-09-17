'use client'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState
} from 'react'

import { getGithubRepos, getGithubUser } from '@/services/services'

import { UserContextDate } from './types'

const userContext = createContext<UserContextDate>({} as UserContextDate)

export const useUserContext = () => useContext(userContext)

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserContextDate>({} as UserContextDate)

  useEffect(() => {
    const loadUser = async () => {
      const userGithub = await getGithubUser()
      const repositorys = await getGithubRepos()

      return setUser({
        userInfos: userGithub,
        repositorys
      })
    }
    loadUser()
  }, [])

  return <userContext.Provider value={user}>{children}</userContext.Provider>
}
