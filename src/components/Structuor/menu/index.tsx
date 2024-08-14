import Link from 'next/link'

import Icon from '@/components/Basic/Icon'
import { ActiveLink } from '@/components/Basic/Link'

import { itemsMenu } from '../../../utils/constantes'

import { ItemMenuStyle, ItemMenuWrapperStyle, NavStyle } from './style'

const Sidemenu = () => (
  <NavStyle data-testid="sidemenu">
    <Link href="/" className="lg:pl-2">
      <Icon id="icon_logo" iconSize={42} />
    </Link>

    <ItemMenuWrapperStyle>
      {itemsMenu.map(
        (item) =>
          item.isShow && (
            <ActiveLink
              href={item.route}
              key={item.id}
              activeClassName="text-red-300"
              classes="flex w-full items-center gap-7
              p-4 transition-all sm:hover:text-red-300
              sm:hover:brightness-90 whitespace-nowrap"
            >
              <ItemMenuStyle>
                <Icon id={item.id} iconSize={26} />
                {item.title}
              </ItemMenuStyle>
            </ActiveLink>
          )
      )}
    </ItemMenuWrapperStyle>
  </NavStyle>
)

export default Sidemenu
