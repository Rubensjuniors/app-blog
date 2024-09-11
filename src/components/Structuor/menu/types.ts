export interface itemsMenuProps {
  id: string
  title: string
  route: string
  isShow: boolean
}

export interface sidemenuProps {
  sidemenuItems: Array<itemsMenuProps>
  classNames?: string
}