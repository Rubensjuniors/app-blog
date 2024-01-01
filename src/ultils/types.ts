import { StaticImport } from 'next/dist/shared/lib/get-img-props'

export interface PrismicImagemData {
  url: string | StaticImport
  width: number
  heigth: number
}

export enum PostTypes {
  GYM = 'gym',
  PROGRAMMER = 'programmer',
  DEFAULT = 'default'
}

export enum DEV {
  PRODUCTION = 'production',
  DEVELOPEMENT = 'development',
}