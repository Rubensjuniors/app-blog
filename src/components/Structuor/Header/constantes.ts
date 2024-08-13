import { itemsHeaderProps } from './types'

export const itemsHeader: Array<itemsHeaderProps> = [
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
