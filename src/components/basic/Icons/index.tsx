import Image from 'next/image'

import IconLib from './LibIcon/iconLib'
import { iconProps } from './types'

const BASE_SRC = '/assets/img/icon'
const icons = new Map()

icons.set('logo_desktop', `${BASE_SRC}/logo-desktop.svg`)
icons.set('logo_mobile', `${BASE_SRC}/logo-mobile.svg`)
icons.set('icon_menu-mobile', `${BASE_SRC}/menu.svg`)
icons.set('gym', `${BASE_SRC}/gym.svg`)

const regex = /phosphor/

const getCorrespondingIcon = (id: string) =>
  icons.has(id) ? icons.get(id) : ''

const Icon = ({ id, iconSize = 24, classIcon, color, wigth }: iconProps) => {
  const iconLib = regex.test(id)

  return iconLib ? (
    <IconLib id={id} iconSize={iconSize} color={color} wigth={wigth} />
  ) : (
    <Image
      alt={id}
      width={iconSize}
      height={iconSize}
      src={getCorrespondingIcon(id)}
      className={classIcon}
      data-testid={id}
    />
  )
}

export default Icon
