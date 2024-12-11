import PhosphorIcons from './phospor'
import { iconProps } from './types'

const icons = new Map()

icons.set('icon_logo', '/images/logo.svg')

const regex = /phosphor/

const getCorrespondingIcon = (id: string) =>
  icons.has(id) ? icons.get(id) : ''

const Icon = ({ id, iconSize = 24, classIcon }: iconProps) => {
  const iconLib = regex.test(id)

  return iconLib ? (
    <PhosphorIcons id={id} iconSize={iconSize} classIcon={classIcon} />
  ) : (
    <img
      alt={id}
      width={iconSize}
      height={iconSize}
      src={getCorrespondingIcon(id)}
      className={classIcon}
      data-testid={id}
      id="icons"
    />
  )
}

export default Icon
