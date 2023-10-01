import Image from 'next/image'

import PhosphorIcons from './PhosporIcons'
import { iconProps } from './types'

import Logo from '@/assets/icons/logo.svg'

const icons = new Map()

icons.set('icon_logo', Logo)

const regex = /phosphor/

const getCorrespondingIcon = (id: string) =>
  icons.has(id) ? icons.get(id) : ''

const Icon = ({ id, iconSize = 24, classIcon }: iconProps) => {
  const iconLib = regex.test(id)

  return iconLib ? (
    <PhosphorIcons id={id} iconSize={iconSize} />
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
      id="icons"
    />
  )
}

export default Icon