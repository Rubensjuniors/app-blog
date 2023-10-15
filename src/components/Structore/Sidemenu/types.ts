import { Dispatch, SetStateAction } from 'react'

export interface itemsMenuProps {
  id: string
  title: string
  path: string
}

export interface sidemenuProps {
  sidemenuItems: Array<itemsMenuProps>
  classNames?: string
  setTitle: Dispatch<SetStateAction<string>>
}
