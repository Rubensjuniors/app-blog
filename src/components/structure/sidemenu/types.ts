export interface itemsMenuProps {
  id: string
  title: string
  path: string
}

export interface sidemenuProps {
  sidemenuItems: Array<itemsMenuProps>
  classNames?: string
}

export type Keystitle = 'about_me' | 'articles' | 'pings'
