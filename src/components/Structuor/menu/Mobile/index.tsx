import { Dispatch, SetStateAction } from 'react'

import Icon from '@/components/Basic/Icon'
import { ActiveLink } from '@/components/Basic/Link'

import { itemsMenu } from '../../../../utils/constantes'

import { ItemMenuStyle } from '../style'
import { NavMobileStyle } from './style'

const SidemenuMobile = ({
  setIsOpenMenu
}: {
  setIsOpenMenu: Dispatch<SetStateAction<boolean>>
}) => (
  <NavMobileStyle>
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
            onClick={() => {
              setIsOpenMenu(false)
            }}
          >
            <ItemMenuStyle>
              <Icon id={item.id} iconSize={26} />
              {item.title}
            </ItemMenuStyle>
          </ActiveLink>
        )
    )}
  </NavMobileStyle>
)

export default SidemenuMobile
