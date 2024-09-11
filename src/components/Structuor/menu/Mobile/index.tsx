import { Dispatch, SetStateAction } from 'react'

import { itemsMenu } from '@/utils/constantes'

import ItemMenu from '../Item'
import * as S from './style'

const SidemenuMobile = ({
  setIsOpenMenu
}: {
  setIsOpenMenu: Dispatch<SetStateAction<boolean>>
}) => (
  <S.NavMobileStyle data-testid="sidemenu-mobile">
    {itemsMenu.map(
      (item) =>
        item.isShow && (
          <ItemMenu
            item={item}
            key={item.id}
            classes="flex w-full items-center gap-7
              p-4 transition-all sm:hover:text-red-300
              sm:hover:brightness-90 whitespace-nowrap"
            setIsOpenMenu={setIsOpenMenu}
          />
        )
    )}
  </S.NavMobileStyle>
)

export default SidemenuMobile
