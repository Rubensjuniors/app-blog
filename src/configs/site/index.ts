/* eslint-disable max-len */
import { SiteConfig } from './types'

export const siteConfig: SiteConfig = {
  photo: '/assets/images/photo-hint-one.webp',
  banner: '/assets/images/banner.jpeg',
  name: 'Rubens junio',
  bio: 'Front End - HTML | CSS, SASS E TAILWIND | JAVASCRIPT | TYPESCRIPT | REACT',
  title: 'Software Engenieer Jr',
  copyright: 'Todos os direitos reseverdos © Rubens junio 2024',
  subtitle:
    'Bem vindo ao meu blog! Eu sou Rubens junio, apaixonado por tecnologia, sempre buscando aprender algo novo todos os dias.',
  url: process.env.NEXT_PUBLIC_URL as string,
  links: {
    instagram: 'https://www.instagram.com/rubs.dev',
    linkedin: 'https://www.linkedin.com/in/rubens-junio-603979250',
    github: 'https://github.com/Rubensjuniors'
  }
}
