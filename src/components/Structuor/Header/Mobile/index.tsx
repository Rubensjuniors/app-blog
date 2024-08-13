'use client'

import { Dispatch, SetStateAction } from 'react'

import Icon from '@/components/Basic/Icon'
import { ActiveLink } from '@/components/Basic/Link'

import { itemsHeader } from '../constantes'
import { ItemStylesMobile, NavStylesMobile } from './style'

const MenuMobile = ({
  setIsOpenMenu
}: {
  setIsOpenMenu: Dispatch<SetStateAction<boolean>>
}) => (
  <NavStylesMobile data-testid="menuMobile">
    {itemsHeader.map(
      (item) =>
        item.isShow && (
          <ActiveLink
            href={item.route}
            key={item.title}
            activeClassName="text-red-300"
            data-testid="items-header"
            onClick={() => {
              setIsOpenMenu(false)
            }}
          >
            <ItemStylesMobile>
              <Icon id={item.id} />
              {item.title}
            </ItemStylesMobile>
          </ActiveLink>
        )
    )}
  </NavStylesMobile>
)

export default MenuMobile
