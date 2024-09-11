'use client'

import Link from 'next/link'

import useHeader from '@/hooks/useHeader'

import { Icon } from '@/components/Basic'

import SidemenuMobile from '../menu/Mobile'
import * as S from './style'

const Header = () => {
  const {
    isOpenSidemenu,
    handleToggleSideMenu,
    setIsOpenSidemenu,
    titleHeader,
    isDesktopAndIsInPost
  } = useHeader()

  return (
    !isDesktopAndIsInPost && (
      <>
        <S.HeaderStyles data-testid="header">
          <span
            data-testid="header-title"
            className="hidden font-bold lg:inline"
          >
            {titleHeader}
          </span>
          <S.HeaderWrapperStyle>
            <Link href="/" className="w-16">
              <Icon id="icon_logo" iconSize={0} />
            </Link>
            <button
              data-testid="button-sidemenu"
              onClick={handleToggleSideMenu}
            >
              <Icon id="list_icon-phosphor" iconSize={33} />
            </button>
          </S.HeaderWrapperStyle>
        </S.HeaderStyles>
        {isOpenSidemenu && (
          <S.ContainerSidemenuMobileStyle>
            <button className="self-end" onClick={handleToggleSideMenu}>
              <Icon id="x_icon-phosphor" iconSize={38} />
            </button>

            <SidemenuMobile setIsOpenMenu={setIsOpenSidemenu} />
          </S.ContainerSidemenuMobileStyle>
        )}
      </>
    )
  )
}

export default Header
