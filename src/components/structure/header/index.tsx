'use client'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

import { useSidemenuContext } from '@/context/sidemenuContext'
import { useTranslationClient } from '@/hooks/useTransletions/client'

const headerClass =
  'z-10 py-3 px-4 sm:px-8 flex justify-between items-center sticky top-0 left-0 backdrop-blur-lg'

const Header = () => {
  const t = useTranslationClient()
  const { title, setTitle } = useSidemenuContext()
  const pathname = usePathname()

  useEffect(() => {
    const validPaths = ['/pt-BR', '/']
    if (validPaths.includes(pathname)) {
      return setTitle(t.blog.sidemenu.home)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <header className={headerClass} data-testid="header">
      <span className="font-bold">{title}</span>
    </header>
  )
}

export default Header
