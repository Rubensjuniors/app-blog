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
