import './globals.css'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { Roboto } from 'next/font/google'
import { ReactNode } from 'react'

import { i18n } from '@/config/i18n/i18m.config'
import { siteConfig } from '@/config/site/site'
import { SidemenuProvider } from '@/context/sidemenuContext'

import Structor from '@/components/structure/Structor.component'

import LogoDesktop from '../../../public/assets/img/icon/gym.svg'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto'
})

export const metadata: Metadata = {
  title: {
    template: '%s | Rubens Junio',
    default: 'Rubens Junio'
  },
  icons: [{ rel: 'icon', url: LogoDesktop.src }],
  description: siteConfig.description,
  authors: [{ name: 'Rubens Junio' }]
}

export const generateStaticParams = () => {
  return i18n.locales.map((lang) => ({ lang }))
}

const RootLayout = async ({
  children,
  params
}: {
  children: ReactNode
  params: { lang: string }
}) => {
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body className={`${roboto.variable} bg-gray-800 text-gray-100`}>
        <NextIntlClientProvider locale={params.lang}>
          <SidemenuProvider>
            <Structor>{children}</Structor>
          </SidemenuProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default RootLayout
