'use client'

import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactElement } from 'react'

interface ActiveLinkProps extends LinkProps {
  children: ReactElement | string
  activeClassName?: string
  classes?: string
}

export function ActiveLink({
  children,
  activeClassName,
  classes = '',
  ...rest
}: ActiveLinkProps) {
  const pathname = usePathname()
  const className = pathname === rest.href ? activeClassName : classes

  return (
    <Link
      {...rest}
      className={`${className} sm:hover:text-red-300 sm:hover:brightness-90`}
    >
      {children}
    </Link>
  )
}
