'use client'
import { ReactNode } from 'react'

import useWindowSize from '@/hooks/useWindowSize/useWindowSize'
import itemsMenu from '@/json/itemsMenu.json'

import Header from './menu/header'
import Sidemenu from './menu/sidemenu'
import SidemenuMobile from './menu/sidemenu/sidemenu-mobile'

interface StructorProps {
  children: ReactNode
}

const Structor = ({ children }: StructorProps) => {
  const { width } = useWindowSize()

  const widthSize = width > 576
  const menuBottomClass = !widthSize && 'flex-col-reverse'
  return (
    <>
      <div
        className={`${menuBottomClass} m-0-auto flex min-h-screen max-w-screen-xl justify-center`}
      >
        {widthSize ? (
          <Sidemenu sidemenuItems={itemsMenu} />
        ) : (
          <SidemenuMobile sidemenuItems={itemsMenu} />
        )}
        <main className="z-1 min-h-screen w-content border-x border-ultils">
          <Header />
          {children}
        </main>
      </div>
    </>
  )
}

export default Structor
