import Icon from '@/components/basic/Icons'
import NavLink from '@/components/basic/NavLink'

import { sidemenuProps } from '../types'

const SidemenuMobile = ({ sidemenuItems }: sidemenuProps) => (
  <>
    <nav className="sticky bottom-0 left-0 z-10 flex w-full items-center bg-segundary sm:hidden">
      {sidemenuItems &&
        sidemenuItems.map((itensMenu) => (
          <NavLink
            path={itensMenu.path}
            key={itensMenu.id}
            classNames="flex flex-1 items-center justify-center p-4"
            activeDefault={itensMenu.path === '/sobre-mim' ? true : false}
          >
            <Icon id={itensMenu.id} />
          </NavLink>
        ))}
    </nav>
  </>
)

export default SidemenuMobile
