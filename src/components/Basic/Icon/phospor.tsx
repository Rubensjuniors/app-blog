import {
  GithubLogo,
  House,
  InstagramLogo,
  LinkedinLogo,
  User,
  Article
} from '@phosphor-icons/react'

import { iconProps } from './types'

const icons = new Map()

const PhosphorIcons = ({ id, iconSize = 24, classIcon }: iconProps) => {
  icons.set(
    'about_icon-phosphor',
    <User size={iconSize} className={classIcon} />
  )
  icons.set(
    'articles_icon-phosphor',
    <Article size={iconSize} className={classIcon} />
  )
  icons.set(
    'instagram_icon-phosphor',
    <InstagramLogo size={iconSize} className={classIcon} />
  )
  icons.set(
    'github_icon-phosphor',
    <GithubLogo size={iconSize} className={classIcon} />
  )
  icons.set(
    'linkedin_icon-phosphor',
    <LinkedinLogo size={iconSize} className={classIcon} />
  )
  icons.set(
    'home_icon-phosphor',
    <House size={iconSize} className={classIcon} />
  )

  const getCorrespondingPhosphorIcons = (id: string) =>
    icons.has(id) ? icons.get(id) : ''

  return <>{getCorrespondingPhosphorIcons(id)}</>
}

export default PhosphorIcons
