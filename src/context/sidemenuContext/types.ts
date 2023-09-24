import { Dispatch, SetStateAction } from 'react'

export interface useSidemenuContextProps {
  title: string
  setTitle: Dispatch<SetStateAction<string>>
}
