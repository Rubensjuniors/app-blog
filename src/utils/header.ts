import { itemsMenuProps } from '@/components/Structuor/menu/types'

export const getTitleWithPath = (items: Array<itemsMenuProps>, route: string) =>
  items.find((item) => item.route === route)?.title ?? ''
