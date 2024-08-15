import Link from 'next/link'

import Icon from '@/components/Basic/Icon'

import { itemsMenu } from '../../../utils/constantes'

import ItemMenu from './Item'
import * as S from './style'

const Sidemenu = () => (
  <S.NavStyle data-testid="sidemenu">
    <Link href="/" className="lg:pl-2">
      <Icon id="icon_logo" iconSize={42} />
    </Link>

    <div>
      {itemsMenu.map(
        (item) =>
          item.isShow && (
            <ItemMenu
              item={item}
              key={item.id}
              classes="flex w-full items-center gap-7
              p-4 transition-all sm:hover:text-red-300
              sm:hover:brightness-90 whitespace-nowrap"
            />
          )
      )}
    </div>
  </S.NavStyle>
)

export default Sidemenu
