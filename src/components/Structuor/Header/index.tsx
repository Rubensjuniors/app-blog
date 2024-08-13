'use client'

import Link from 'next/link'
import { useState } from 'react'

import Icon from '@/components/Basic/Icon'
import { ActiveLink } from '@/components/Basic/Link'

import { itemsHeader } from './constantes'
import MenuMobile from './Mobile'
import { ContainerHeaderStyles, HeaderStyles, MenuMobileContainer, NavStyles } from './style'

const Header = () => {
  const [isOpenSidemenu, setIsOpenSidemenu] = useState<boolean>(false)

  return (
    <HeaderStyles data-testid="header-component">
      <ContainerHeaderStyles>
        <Link href="/" data-testid="logo-component">
          <Icon id="icon_logo" iconSize={58} />
        </Link>

        <NavStyles>
          {itemsHeader.map(
            (item) =>
              item.isShow && (
                <ActiveLink
                  href={item.route}
                  key={item.title}
                  activeClassName="text-red-300"
                  data-testid="items-header"
                  classes="py-1"
                >
                  {item.title}
                </ActiveLink>
              )
          )}
        </NavStyles>
        <button className="sm:hidden" onClick={() => setIsOpenSidemenu(!isOpenSidemenu)}>
            <Icon id="list_icon-phosphor" iconSize={33} />
        </button>
      </ContainerHeaderStyles>

      {isOpenSidemenu && (
        <MenuMobileContainer>
          <button
            className="self-end"
            onClick={() => setIsOpenSidemenu(!isOpenSidemenu)}
          >
            <Icon id="x_icon-phosphor" iconSize={38} />
          </button>

          <MenuMobile setIsOpenMenu={setIsOpenSidemenu} />
        </MenuMobileContainer>
      )}
    </HeaderStyles>
  )
}

export default Header
