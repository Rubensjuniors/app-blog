import { NotePencil, Paperclip, User } from '@phosphor-icons/react'

import { iconProps } from '../types'

const icons = new Map()

const IconLib = ({ id, iconSize }: iconProps) => {
  icons.set('artigos_icon-phosphor', <NotePencil size={iconSize} />)
  icons.set('sobre_icon-phosphor', <User size={iconSize} />)
  icons.set('pings_icon-phosphor', <Paperclip size={iconSize} />)

  const getCorrespondingIconLib = (id: string) =>
    icons.has(id) ? icons.get(id) : ''

  return <>{getCorrespondingIconLib(id)}</>
}

export default IconLib
