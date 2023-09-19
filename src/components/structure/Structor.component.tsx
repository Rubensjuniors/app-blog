'use client'
import { ReactNode } from 'react'

import useWindowSize from '@/hooks/useWindowSize/useWindowSize'
import { SCRENN_SIZES } from '@/ultils/constants'

import Header from './header'
import Sidemenu from './sidemenu'

interface StructorProps {
  children: ReactNode
}

const Structor = ({ children }: StructorProps) => {
  const { width } = useWindowSize()

  const widthSize = width > SCRENN_SIZES.SM
  const menuBottomClass = !widthSize && 'flex-col-reverse'
  return (
    <>
      <div
        data-testid="structor"
        className={`${menuBottomClass} m-0-auto flex min-h-screen max-w-screen-lg justify-center`}
      >
        <Sidemenu />
        <main className="z-1 min-h-screen w-content border-x border-gray-600">
          <Header />
          {children}
        </main>
      </div>
    </>
  )
}

export default Structor
