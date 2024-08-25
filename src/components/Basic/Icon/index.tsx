import Image from 'next/image'

import Logo from '@/assets/icons/Logo.svg'

import PhosphorIcons from './PhosporIcons'
import { iconProps } from './types'

const icons = new Map()

icons.set('icon_logo', Logo)

const regex = /phosphor/

const getCorrespondingIcon = (id: string) =>
  icons.has(id) ? icons.get(id) : ''

const Icon = ({ id, iconSize = 24, classIcon }: iconProps) => {
  const iconLib = regex.test(id)

  return iconLib ? (
    <PhosphorIcons id={id} iconSize={iconSize} classIcon={classIcon} />
  ) : (
    <Image
      alt={id}
      width={iconSize}
      height={iconSize}
      sizes="100vw"
      src={getCorrespondingIcon(id)}
      className={classIcon}
      data-testid={id}
      priority={false}
      placeholder="empty"
      style={{ width: '100%', height: 'auto' }}
      id="icons"
    />
  )
}

export default Icon
