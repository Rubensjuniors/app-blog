import { SiteConfig } from './types'

export const siteConfig: SiteConfig = {
  name: 'Rubens junio',
  description: 'Blog onde falo de código e lifestyle',
  title: 'Junior Software Engineer e gymrat.',
  subtitle:
    'Bem vindo ao meu blog! Eu sou Rubens junio, apaixonado por tecnologia, sempre buscando aprender algo novo todos os dias.',
  url: process.env.SITE_URL ?? 'https://devrubensjunio.com.br/',
  ogImage: `${process.env.SITE_URL}/og.jpg`,
  links: {
    youtube: 'https://www.youtube.com/@devjunioralves',
    github: 'https://github.com/jjunior96',
    linkedin: 'https://www.linkedin.com/in/junior-alves-b66a10127/'
  },
  comments: `${process.env.NEXT_PUBLIC_DISQUS_SHORT_NAME}`
}
