import ptBRCopies from '../../public/languages/pt-BR.json'

export enum SCRENN_SIZES {
  SM = 576,
  MD = 768,
  LG = 960,
  XL = 1440,
}

export type KeySidemenu = 'about_me' | 'links'

export const sidemenuItems = [
  {
    id: 'home_icon-phosphor',
    title: 'home',
    path: '/',
  },
  {
    id: 'sobre_icon-phosphor',
    title: 'about_me',
    path: '/about',
  },
]

export const getCopies = () => ptBRCopies

export const SOCIAIS = [
  {
    id: 'instagram_icon-phosphor',
    name: 'instagram',
    url: 'https://www.instagram.com/eorubis',
  },
  {
    id: 'github_icon-phosphor',
    name: 'github',
    url: 'https://github.com/Rubensjuniors',
  },
  {
    id: 'linkedin_icon-phosphor',
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/rubens-junio-603979250',
  },
]
