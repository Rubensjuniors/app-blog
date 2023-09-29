'use client'
import { ReactNode, useState } from 'react'

import { useTranslationClient } from '@/hooks/useTransletions/client'
import { sidemenuItems } from '@/ultils/constants'

import Header from './header'
import Sidemenu from './sidemenu'

interface StructorProps {
  children: ReactNode
}

const Structor = ({ children }: StructorProps) => {
  const t = useTranslationClient()

  const [title, setTitle] = useState<string>(t.blog.sidemenu.home)
  return (
    <>
      <div
        data-testid="structor"
        className={`m-0-auto flex min-h-screen max-w-screen-xl justify-center`}
      >
        <Sidemenu sidemenuItems={sidemenuItems} setTitle={setTitle} />
        <main className="z-1 min-h-screen w-content border-x border-gray-600">
          <Header title={title} setTitle={setTitle} />
          {children}
        </main>
      </div>
    </>
  )
}

export default Structor
