import Image from 'next/image'

import IconLib from './LibIcon/iconLib'
import { iconProps } from './types'

const BASE_SRC = '/assets/img/icon'
const icons = new Map()

icons.set('icon_logo', `${BASE_SRC}/logo-desktop.svg`)
icons.set('gym', `${BASE_SRC}/gym.svg`)

const regex = /phosphor/

const getCorrespondingIcon = (id: string) =>
  icons.has(id) ? icons.get(id) : ''

const Icon = ({ id, iconSize = 24, classIcon }: iconProps) => {
  const iconLib = regex.test(id)

  return iconLib ? (
    <IconLib id={id} iconSize={iconSize} />
  ) : (
    <Image
      alt={id}
      width={iconSize}
      height={iconSize}
      src={getCorrespondingIcon(id)}
      className={classIcon}
      data-testid={id}
      priority={false}
      placeholder="empty"
    />
  )
}

export default Icon
