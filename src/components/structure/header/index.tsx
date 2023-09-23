'use client'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import useWindowSize from '@/hooks/useWindowSize/useWindowSize'
import itemsMenu from '@/json/itemsMenu.json'

import { Icon, NavLink } from '@/components/basic'

const headerClass =
  'z-10 py-3 px-4 sm:px-8 flex justify-between items-center sticky top-0 left-0 backdrop-blur-lg'

const Header = () => {
  const [title, setTitle] = useState('Sobre mim')
  const { width } = useWindowSize()
  const pathname = usePathname()
  const widthSize = width > 768

  useEffect(() => {
    if (pathname === '/') {
      return setTitle(itemsMenu[0].title)
    }

    const renderTitle = (path: string) => {
      itemsMenu.some((items) => {
        if (items.path === path) {
          return setTitle(items.title)
        }
      })
    }

    renderTitle(pathname)
  }, [pathname])

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