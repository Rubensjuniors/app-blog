import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactElement } from 'react'

import useWindowSize from '@/hooks/useWindowSize/useWindowSize'

interface ActiveLinkProps {
  children?: ReactElement | string
  classNames?: string
  activeClassName?: string
  path: string
  onClick?: () => void
}

const NavLink = ({ path, classNames, children, onClick }: ActiveLinkProps) => {
  const { width } = useWindowSize()
  const pathname = usePathname()
  const widthSize = width > 576
  const isActive =
    pathname.replace(/\/pt-BR/g, '') === path ? 'text-red-300' : ''
  const hover = widthSize && 'hover:brightness-90 transition-all'

  return (
    <Link
      href={path}
      className={`${classNames} ${isActive} ${hover}`}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

export default NavLink
