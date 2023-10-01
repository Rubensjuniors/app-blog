export enum SCRENN_SIZES {
  SM = 576,
  MD = 768,
  LG = 960,
  XL = 1440
}

export type Keystitle = 'about_me' | 'links' 

export const sidemenuItems = [
  {
    id: 'home_icon-phosphor',
    title: 'home',
    path: '/'
  },
  {
    id: 'sobre_icon-phosphor',
    title: 'about_me',
    path: '/about'
  },
  {
    id: 'links-phosphor',
    title: 'links',
    path: '/links'
  }
]