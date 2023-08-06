import Link from 'next/link'

import Icon from '@/components/basic/Icons'

import { sidemenuProps } from '../types'

const SidemenuMobile = ({ sidemenuItems }: sidemenuProps) => (
  <>
    <nav className="sticky bottom-0 left-0 flex w-full items-center bg-segundary">
      {sidemenuItems &&
        sidemenuItems.map((itensMenu) => (
          <Link
            href={itensMenu.path}
            key={itensMenu.id}
            className="flex flex-1 items-center justify-center p-4"
          >
            <Icon id={itensMenu.id} />
          </Link>
        ))}
    </nav>
  </>
)

export default SidemenuMobile
