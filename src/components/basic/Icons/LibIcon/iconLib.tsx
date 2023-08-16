'use client'
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  NotePencil,
  Paperclip,
  User
} from '@phosphor-icons/react'

import { iconProps } from '../types'

const icons = new Map()

const IconLib = ({ id, iconSize }: iconProps) => {
  icons.set('artigos_icon-phosphor', <NotePencil size={iconSize} />)
  icons.set('sobre_icon-phosphor', <User size={iconSize} />)
  icons.set('pings_icon-phosphor', <Paperclip size={iconSize} />)
  icons.set('instagram_icon-phosphor', <InstagramLogo size={iconSize} />)
  icons.set('github_icon-phosphor', <GithubLogo size={iconSize} />)
  icons.set('linkedin_icon-phosphor', <LinkedinLogo size={iconSize} />)

  const getCorrespondingIconLib = (id: string) =>
    icons.has(id) ? icons.get(id) : ''

  return <>{getCorrespondingIconLib(id)}</>
}

export default IconLib
