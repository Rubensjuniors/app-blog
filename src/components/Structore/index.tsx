import { ReactNode } from 'react'

import { sidemenuItems } from '@/ultils/constants'

import Footer from './Footer'
import Header from './Header'
import Sidemenu from './Sidemenu'

interface StructorProps {
  children: ReactNode
}

const Structor = ({ children }: StructorProps) => {

  return (
    <>
      <div
        data-testid="structor"
        className={'m-0-auto flex min-h-screen max-w-screen-xl justify-center'}
      >
        <Sidemenu sidemenuItems={sidemenuItems} />
        <main className="z-1 w-content border-x border-gray-600">
          <Header />
          <div className="flex flex-col justify-between min-h-[95vh]">
            <div>
              {children}
            </div>
            <Footer/>
          </div>
        </main>
      </div>
    </>
  )
}

export default Structor
