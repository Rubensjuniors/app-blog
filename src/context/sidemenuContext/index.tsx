'use client'
import { ReactNode, createContext, useContext, useState } from 'react'

import { useTranslationClient } from '@/hooks/useTransletions/client'

import { useSidemenuContextProps } from './types'

const sidemenuContext = createContext({} as useSidemenuContextProps)

export const useSidemenuContext = () => useContext(sidemenuContext)

export const SidemenuProvider = ({ children }: { children: ReactNode }) => {
  const t = useTranslationClient()
  const [title, setTitle] = useState<string>(t.blog.sidemenu.home)

  return (
    <sidemenuContext.Provider value={{ title, setTitle }}>
      {children}
    </sidemenuContext.Provider>
  )
}
