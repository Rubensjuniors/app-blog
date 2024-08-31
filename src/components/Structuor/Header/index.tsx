'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import useWindowSize from '@/hooks/use-window-size'

import { Icon } from '@/components/Basic'

import { itemsMenu } from '@/utils/constantes'
import { getTitleWithPath } from '@/utils/header'

import SidemenuMobile from '../menu/Mobile'
import {
  ContainerSidemenuMobileStyle,
  HeaderStyles,
  HeaderWrapperStyle
} from './style'

const Header = () => {
  const pathname = usePathname()
  const { width } = useWindowSize()
  const [isOpenSidemenu, setIsOpenSidemenu] = useState<boolean>(false)
  const [titleHeader, setTitleHeader] = useState<string>('Início')
  const isInPost = /^\/artigos\//.test(pathname)
  const isDesktopAndIsInPost = isInPost && width >= 960

  useEffect(() => {
    setTitleHeader(getTitleWithPath(itemsMenu, pathname))
  }, [pathname])

  return (
    !isDesktopAndIsInPost && (
      <>
        <HeaderStyles data-testid="header">
          <span
            data-testid="header-title"
            className="hidden font-bold lg:inline"
          >
            {titleHeader}
          </span>
          <HeaderWrapperStyle>
            <Link href="/" className="w-16">
              <Icon id="icon_logo" iconSize={0} />
            </Link>
            <button
              data-testid="button-sidemenu"
              onClick={() => setIsOpenSidemenu(!isOpenSidemenu)}
            >
              <Icon id="list_icon-phosphor" iconSize={33} />
            </button>
          </HeaderWrapperStyle>
        </HeaderStyles>
        {isOpenSidemenu && (
          <ContainerSidemenuMobileStyle>
            <button
              className="self-end"
              onClick={() => setIsOpenSidemenu(!isOpenSidemenu)}
            >
              <Icon id="x_icon-phosphor" iconSize={38} />
            </button>

            <SidemenuMobile setIsOpenMenu={setIsOpenSidemenu} />
          </ContainerSidemenuMobileStyle>
        )}
      </>
    )
  )
}

export default Header
