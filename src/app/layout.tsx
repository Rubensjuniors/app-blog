import type { Metadata } from 'next'
import { Roboto, Marck_Script } from 'next/font/google'

import favicon from '@/assets/icons/Favicons.svg'
import { siteConfig } from '@/configs/site'

import Structor from '@/components/Structuor'

import { LayoutProps } from './types'

import '@/assets/styles/globals.css'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto'
})
const MarckScript = Marck_Script({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-marck-script',
  weight: '400'
})

export const metadata: Metadata = {
  title: {
    template: '%s | Rubens Junio',
    default: 'Rubens Junio'
  },
  icons: [{ rel: 'icon', url: favicon.src }],
  description: siteConfig.subtitle,
  authors: [{ name: 'Rubens Junio' }]
}

const RootLayout = async ({ children }: LayoutProps) => (
  <html lang="pt-BR" suppressHydrationWarning={true}>
    <body
      suppressHydrationWarning={true}
      className={`${roboto.variable} ${MarckScript.variable} bg-gray-700 text-gray-100`}
    >
      <Structor>{children}</Structor>
    </body>
  </html>
)

export default RootLayout
