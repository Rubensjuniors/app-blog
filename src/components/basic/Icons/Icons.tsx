import { iconProps } from './types'

const BASE_SRC = '/assets/img/icon'
const icons = new Map()

icons.set('logo_desktop', `${BASE_SRC}/logo-desktop.svg`)
icons.set('logo_mobile', `${BASE_SRC}/logo-mobile.svg`)
icons.set('icon_menu-mobile', `${BASE_SRC}/menu.svg`)
icons.set('gym', `${BASE_SRC}/gym.svg`)
icons.set('artigos_icon', `${BASE_SRC}/artigos.svg`)
icons.set('sobre_icon', `${BASE_SRC}/sobre-mim.svg`)
icons.set('pings_icon', `${BASE_SRC}/pings.svg`)

const getCorrespondingIcon = (id: string) => (icons.has(id) ? icons.get(id) : '')

const Icon = ({ id, iconSize = 24, classIcon }: iconProps) => (
  <img
    alt={id}
    width={iconSize}
    height={iconSize}
    src={getCorrespondingIcon(id)}
    className={classIcon}
    data-testid={id}
  />
)

export default Icon
