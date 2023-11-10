import { StaticImport } from 'next/dist/shared/lib/get-img-props'

export interface PrismicImagemData {
  url: string | StaticImport
  width: number
  heigth: number
}