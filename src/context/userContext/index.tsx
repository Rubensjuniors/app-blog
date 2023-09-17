'use client'
import { ReactNode, createContext, useContext } from 'react'

import { UserContextDate } from './types'

const defaultValue = {
  userInfos: {
    avatar_url: '',
    url: '',
    name: 'Rubens Junio',
    bio: ''
  },
  repositorys: {
    id: 12,
    name: 'string',
    private: false,
    description: '',
    url: '',
    owner: {
      login: 'Eorubis'
    }
  }
}

const userContext = createContext<UserContextDate>({} as UserContextDate)

export const useUserContext = () => useContext(userContext)

export const UserProvider = ({ children }: { children: ReactNode }) => (
  <userContext.Provider value={defaultValue}>{children}</userContext.Provider>
)
