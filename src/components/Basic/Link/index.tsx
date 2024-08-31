'use client'

import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactElement } from 'react'

interface ActiveLinkProps extends LinkProps {
  children: ReactElement | string
  activeClassName?: string
  classes?: string
}

const ActiveLink = ({
  children,
  activeClassName,
  classes = '',
  ...rest
}: ActiveLinkProps) => {
  const pathname = usePathname()
  const className = pathname === rest.href ? activeClassName :  ''

  return (
    <Link
      {...rest}
      className={`${className} ${classes}`}
    >
      {children}
    </Link>
  )
}

export default ActiveLink
