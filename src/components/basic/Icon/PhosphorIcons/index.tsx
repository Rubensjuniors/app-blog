'use client'
import {
  CaretDown,
  CaretUp,
  GithubLogo,
  House,
  InstagramLogo,
  LinkedinLogo,
  List,
  NotePencil,
  Paperclip,
  User,
  X,
  Link,
} from '@phosphor-icons/react'

import { iconProps } from '../types'

const icons = new Map()

const PhosphorIcons = ({ id, iconSize = 24 }: iconProps) => {
  icons.set('artigos_icon-phosphor', <NotePencil size={iconSize} />)
  icons.set('sobre_icon-phosphor', <User size={iconSize} />)
  icons.set('pings_icon-phosphor', <Paperclip size={iconSize} />)
  icons.set('instagram_icon-phosphor', <InstagramLogo size={iconSize} />)
  icons.set('github_icon-phosphor', <GithubLogo size={iconSize} />)
  icons.set('linkedin_icon-phosphor', <LinkedinLogo size={iconSize} />)
  icons.set('list_icon-phosphor', <List size={iconSize} />)
  icons.set('home_icon-phosphor', <House size={iconSize} />)
  icons.set('x_icon-phosphor', <X size={iconSize} />)
  icons.set('caretUp-phosphor', <CaretUp size={iconSize} />)
  icons.set('caretDown-phosphor', <CaretDown size={iconSize} />)
  icons.set('links-phosphor', <Link size={iconSize} />)

  const getCorrespondingPhosphorIcons = (id: string) =>
    icons.has(id) ? icons.get(id) : ''

  return <>{getCorrespondingPhosphorIcons(id)}</>
}

export default PhosphorIcons
