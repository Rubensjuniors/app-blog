'use client'
import Link from 'next/link'
import { Dispatch, SetStateAction, useState } from 'react'

import { Icon } from '@/components/basic'

import SidemenuMobile from '../Sidemenu/Mobile'

const headerClass =
'z-10 py-4 sm:py-5 px-4 sm:px-8 flex items-center sticky top-0 left-0 backdrop-blur-lg shadow-md'
const sidemenuClass = 'fixed left-0 top-0 z-30 flex min-h-screen w-full animate-slide-enter flex-col gap-10 overflow-hidden p-4 pt-6 backdrop-blur-lg transition-all duration-300 ease-in-out sm:hidden'

const Header = ({
  title,
  setTitle,
}: {
  title: string
  setTitle: Dispatch<SetStateAction<string>>
}) => {
  const [isOpenSidemenu, setIsOpenSidemenu] = useState<boolean>(false)

  return (
    <>
      <header className={headerClass} data-testid="header">
        <span className="hidden font-bold sm:inline">{title}</span>
        <div className="flex w-full items-center justify-between sm:hidden">
          <button onClick={() => setIsOpenSidemenu(!isOpenSidemenu)}>
            <Icon id="list_icon-phosphor" iconSize={33} />
          </button>
          <Link href="/">
            <Icon id="icon_logo" iconSize={33} />
          </Link>
        </div>
      </header>
      {isOpenSidemenu && (
        <div className={sidemenuClass}>
          <button
            className="self-end"
            onClick={() => setIsOpenSidemenu(!isOpenSidemenu)}
          >
            <Icon id="x_icon-phosphor" iconSize={38} />
          </button>

          <SidemenuMobile
            setIsOpenMenu={setIsOpenSidemenu}
            setTitle={setTitle}
          />
        </div>
      )}
    </>
  )
}

export default Header
