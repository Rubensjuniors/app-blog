import { ReactNode } from 'react'

import { sidemenuItems } from '@/ultils/constants'

import Header from './header'
import Sidemenu from './sidemenu'

interface StructorProps {
  children: ReactNode
}

const Structor = ({ children }: StructorProps) => {
  return (
    <>
      <div
        data-testid="structor"
        className={`m-0-auto flex min-h-screen max-w-screen-lg justify-center`}
      >
        <Sidemenu sidemenuItems={sidemenuItems} />
        <main className="z-1 min-h-screen w-content border-x border-gray-600">
          <Header />
          {children}
        </main>
      </div>
    </>
  )
}

export default Structor
