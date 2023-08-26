import './globals.css'
import type { Metadata } from 'next'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree
} from 'next/font/google'
import { ReactNode, Suspense } from 'react'

import { siteConfig } from '@/config/site/site'

import Structor from '@/components/structure/Structor.component'

import LogoDesktop from '../../public/assets/img/icon/gym.svg'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree'
})

export const metadata: Metadata = {
  title: {
    template: '%s | Rubens Junio',
    default: 'Rubens Junio'
  },
  icons: [{ rel: 'icon', url: LogoDesktop.src }],
  description: siteConfig.description,
  manifest: '/manifest.json',
  authors: [{ name: 'Junior Alves' }],
  metadataBase: new URL(`${siteConfig.url}`),
  openGraph: {
    type: 'website',
    url: `${siteConfig.url}/cover.jpg`,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: 'Eorubis',
    images: [
      {
        url: `${siteConfig.url}/cover.jpg`
      }
    ]
  },
  robots: 'index, follow',
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/cover.jpg`]
  }
}

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="pt-br" suppressHydrationWarning>
    <body className={`${roboto.variable} ${baiJamjuree.variable}`}>
      <Suspense fallback={<p>Loading...</p>}>
        <Structor>{children}</Structor>
      </Suspense>
    </body>
  </html>
)

export default RootLayout
