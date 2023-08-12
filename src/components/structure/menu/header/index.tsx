'use client'
import useWindowSize from '@/hooks/useWindowSize/useWindowSize'

import Icon from '@/components/basic/Icons'
import NavLink from '@/components/basic/NavLink'

interface HeaderProps {
  title: string
}

const headerClass =
  'p-4 border-b border-ultils flex justify-between items-center sticky top-0 left-0 backdrop-blur-sm'

const Header = ({ title }: HeaderProps) => {
  const { width } = useWindowSize()

  const widthSize = width > 768

  return (
    <header className={headerClass}>
      <span className="font-bold text-default_text">{title}</span>
      {widthSize ? (
        <Icon id="gym" iconSize={28} />
      ) : (
        <NavLink path="/">
          <Icon id="logo_desktop" iconSize={42} />
        </NavLink>
      )}
    </header>
  )
}

export default Header
