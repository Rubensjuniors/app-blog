import useWindowSize from '@/hooks/useWindowSize/useWindowSize'
import { SCRENN_SIZES } from '@/ultils/constants'

import { sidemenuItems } from './constants'
import SidemenuDesktop from './sidemenu-desktop/sidemenu.desktop'
import SidemenuMobile from './sidemenu-mobile/sidemenu.component.mob'

const Sidemenu = () => {
  const { width } = useWindowSize()

  const widthSize = width > SCRENN_SIZES.SM
  return widthSize ? (
    <SidemenuDesktop sidemenuItems={sidemenuItems} />
  ) : (
    <SidemenuMobile sidemenuItems={sidemenuItems} />
  )
}

export default Sidemenu
