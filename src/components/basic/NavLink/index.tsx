import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactElement } from 'react'

import useWindowSize from '@/hooks/useWindowSize/useWindowSize'

interface ActiveLinkProps {
  children?: ReactElement | string
  classNames?: string
  activeClassName?: string
  path: string
}

const NavLink = ({ path, classNames, children }: ActiveLinkProps) => {
  const { width } = useWindowSize()
  const pathname = usePathname()
  const widthSize = width > 576
  const isActive = pathname === path ? 'text-red-300' : ''
  const hover = widthSize && 'hover:brightness-90 transition-all'

  return (
    <Link href={path} className={`${classNames} ${isActive} ${hover}`}>
      {children}
    </Link>
  )
}

export default NavLink
