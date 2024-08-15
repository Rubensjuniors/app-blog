import { itemsMenuProps } from '../components/Structuor/menu/types'

export const itemsMenu: Array<itemsMenuProps> = [
  {
    id: 'home_icon-phosphor',
    title: 'Início',
    route: '/',
    isShow: true
  },
  {
    id: 'about_icon-phosphor',
    title: 'Sobre mim',
    route: '/sobre',
    isShow: true
  },
  {
    id: 'articles_icon-phosphor',
    title: 'Artigos',
    route: '/artigos',
    isShow: true
  },
  {
    id: 'cursos',
    title: 'Cursos',
    route: '/cursos',
    isShow: false
  }
]

export const SOCIAIS = [
  {
    id: 'instagram_icon-phosphor',
    name: 'instagram',
    url: 'https://www.instagram.com/rubs.dev',
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