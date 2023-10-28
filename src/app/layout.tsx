import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import favicon from '@/assets/icons/Favicon.svg'
import Structor from '@/components/Structore'
import { siteConfig } from '@/config/site'

import { LayoutProps } from './types'

import './globals.css'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Rubens Junio',
    default: 'Rubens Junio',
  },
  icons: [{ rel: 'icon', url: favicon.src }],
  description: siteConfig.description,
  authors: [{ name: 'Rubens Junio' }],
}

const RootLayout = async ({ children }: LayoutProps) => {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${roboto.variable} bg-gray-800 text-gray-100`}>
        <Structor>{children}</Structor>
      </body>
    </html>
  )
}

export default RootLayout
