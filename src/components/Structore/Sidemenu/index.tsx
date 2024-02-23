'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Icon } from '@/components/basic'

import { KeySidemenu, getCopies } from '@/ultils/constants'

import { sidemenuProps } from './types'

const Sidemenu = ({ sidemenuItems }: sidemenuProps) => {
  const t = getCopies()
  const pathname = usePathname()
  const filterPath = pathname.replace(/\/pt-BR/g, '')
  const filterDefaultPath = pathname === '/pt-BR' && '/'

  return (
    <nav
      data-testid="sidemenu"
      className="sticky left-0 top-0 hidden max-h-screen w-[73px] overflow-hidden flex-col items-center justify-start gap-4 p-3 pt-5 sm1:flex lg:hover:w-56 lg:items-start lg:p-1 lg:pt-5 duration-500 ease-in-out"
    >
      <Link href="/" className="lg:pl-2">
        <Icon id="icon_logo" iconSize={42} />
      </Link>

      <ul className="flex flex-col items-start lg:w-full">
        {sidemenuItems &&
          sidemenuItems.map((itensMenu) => (
            <Link
              href={itensMenu.path}
              key={itensMenu.id}
              className={`
              ${
                (filterPath || filterDefaultPath || pathname) === itensMenu.path
                  ? 'text-red-300'
                  : ''
              }
              flex w-full items-center gap-7
              p-4 transition-all sm:hover:text-red-300
              sm:hover:brightness-90 whitespace-nowrap`}
            >
              <>
                <div className="min-w-24">
                  <Icon id={itensMenu.id} iconSize={26}/>
                </div>

                <li className="hidden font-bold lg:inline">
                  {t.sidemenu[itensMenu.title as KeySidemenu]}
                </li>
              </>
            </Link>
          ))}
      </ul>
    </nav>
  )
}

export default Sidemenu
