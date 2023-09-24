'use client'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

import { useSidemenuContext } from '@/context/sidemenuContext'
import { useTranslationClient } from '@/hooks/useTransletions/client'
import useWindowSize from '@/hooks/useWindowSize/useWindowSize'

import { Icon, NavLink } from '@/components/basic'

const headerClass =
  'z-10 py-3 px-4 sm:px-8 flex justify-between items-center sticky top-0 left-0 backdrop-blur-lg'

const Header = () => {
  const { title, setTitle } = useSidemenuContext()
  const t = useTranslationClient()
  const { width } = useWindowSize()
  const pathname = usePathname()
  const widthSize = width > 768

  useEffect(() => {
    const validPaths = ['/pt-BR', '/']
    if (validPaths.includes(pathname)) {
      return setTitle(t.blog.header.default)
    }
  }, [pathname, setTitle, t.blog.header.default])

  return (
    <header className={headerClass} data-testid="header">
      <span className="font-bold">{title}</span>
      {widthSize ? (
        <Icon id="code_icon-phosphor" iconSize={28} />
      ) : (
        <NavLink path="/">
          <Icon id="icon_logo" iconSize={42} />
        </NavLink>
      )}
    </header>
  )
}

export default Header
