'use client'

import { SetStateAction } from 'react'

import Icon from '@/components/Basic/Icon'
import { ActiveLink } from '@/components/Basic/Link'

import { itemsMenuProps } from '../types'
import * as S from './style'

interface IItemMenu {
  item: itemsMenuProps
  setIsOpenMenu?: (value: SetStateAction<boolean>) => void
  classes?: string
}

const ItemMenu = ({
  item,
  setIsOpenMenu = () => void 0,
  classes
}: IItemMenu) => (
  <ActiveLink
    href={item.route}
    activeClassName="text-red-300"
    classes={classes}
    onClick={() => {
      setIsOpenMenu(false)
    }}
  >
    <S.ItemMenuStyle>
      <Icon id={item.id} iconSize={26} />
      {item.title}
    </S.ItemMenuStyle>
  </ActiveLink>
)

export default ItemMenu
