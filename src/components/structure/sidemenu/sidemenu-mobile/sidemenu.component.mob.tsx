import { Icon, NavLink } from '@/components/basic'

import { sidemenuProps } from '../types'

const SidemenuMobile = ({ sidemenuItems }: sidemenuProps) => (
  <nav
    data-testid="sidemenu-mobile"
    className="sticky bottom-0 left-0 z-10 flex w-full items-center bg-gray-800 sm:hidden"
  >
    {sidemenuItems &&
      sidemenuItems.map((itensMenu) => (
        <NavLink
          path={itensMenu.path}
          key={itensMenu.id}
          classNames="icon-sidemenu flex flex-1 items-center justify-center p-4"
        >
          <Icon id={itensMenu.id} />
        </NavLink>
      ))}
  </nav>
)

export default SidemenuMobile
