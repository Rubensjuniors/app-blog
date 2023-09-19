import useWindowSize from '@/hooks/useWindowSize/useWindowSize'
import itemsMenu from '@/json/itemsMenu.json'
import { SCRENN_SIZES } from '@/ultils/constants'

import SidemenuDesktop from './sidemenu-desktop/sidemenu.desktop'
import SidemenuMobile from './sidemenu-mobile/sidemenu.component.mob'

const Sidemenu = () => {
  const { width } = useWindowSize()

  const widthSize = width > SCRENN_SIZES.SM
  return widthSize ? (
    <SidemenuDesktop sidemenuItems={itemsMenu} />
  ) : (
    <SidemenuMobile sidemenuItems={itemsMenu} />
  )
}

export default Sidemenu
