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
  Article,
  Star,
  LinkSimple,
  ArrowSquareOut,
  MagnifyingGlass,
  CalendarBlank,
  Code,
  Barbell,
  Copy,
} from '@phosphor-icons/react'

import { iconProps } from '../types'

const icons = new Map()

const PhosphorIcons = ({ id, iconSize = 24, classIcon }: iconProps) => {
  icons.set('artigos_icon-phosphor', <NotePencil size={iconSize} className={classIcon} />)
  icons.set('sobre_icon-phosphor', <User size={iconSize} className={classIcon} />)
  icons.set('user-phosphor', <User size={iconSize} className={classIcon} />)
  icons.set('artigos_icon-phosphor', <Article size={iconSize} className={classIcon} />)
  icons.set('links_icon-phosphor', <Link size={iconSize} className={classIcon} />)
  icons.set('pings_icon-phosphor', <Paperclip size={iconSize} className={classIcon} />)
  icons.set('instagram_icon-phosphor', <InstagramLogo size={iconSize} className={classIcon} />)
  icons.set('github_icon-phosphor', <GithubLogo size={iconSize} className={classIcon} />)
  icons.set('linkedin_icon-phosphor', <LinkedinLogo size={iconSize} className={classIcon} />)
  icons.set('list_icon-phosphor', <List size={iconSize} className={classIcon} />)
  icons.set('home_icon-phosphor', <House size={iconSize} className={classIcon} />)
  icons.set('x_icon-phosphor', <X size={iconSize} className={classIcon} />)
  icons.set('caretUp-phosphor', <CaretUp size={iconSize} className={classIcon} />)
  icons.set('caretDown-phosphor', <CaretDown size={iconSize} className={classIcon} />)
  icons.set('star-phosphor', <Star size={iconSize} weight="fill" color="#FBFF00" className={classIcon} />)
  icons.set('linkSimples-phosphor', <LinkSimple size={iconSize}className={classIcon} />)
  icons.set('arrowSquareOut-phosphor', <ArrowSquareOut size={iconSize} className={classIcon} />)
  icons.set('magnifyingGlass-phosphor', <MagnifyingGlass size={iconSize} className={classIcon} />)
  icons.set('calendarBlank-phosphor', <CalendarBlank size={iconSize} className={classIcon} />)
  icons.set('code-phosphor', <Code size={iconSize} color="#00B37E" className={classIcon} />)
  icons.set('barbell-phosphor', <Barbell size={iconSize} color="#F75A68" className={classIcon} />)
  icons.set('copy-phosphor', <Copy size={iconSize} className={classIcon} />)

  const getCorrespondingPhosphorIcons = (id: string) =>
    icons.has(id) ? icons.get(id) : ''

  return <>{getCorrespondingPhosphorIcons(id)}</>
}

export default PhosphorIcons
