import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import { siteConfig } from '@/config/site'

import LogoDesktop from '@/assets/icons/favicon-gym.svg'
import { i18n } from '@/config/i18n/i18n.config'
import { ReactNode } from 'react'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import Structor from '@/components/Structure/Structure'

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
  icons: [{ rel: 'icon', url: LogoDesktop.src }],
  description: siteConfig.description,
  authors: [{ name: 'Rubens Junio' }],
}

export const generateStaticParams = () => {
  return i18n.locales.map((lang) => ({ lang }))
}

export default function RootLayout({
  children,
  params,
}: {
  children: ReactNode
  params: { lang: string }
}) {
  const isValidLocale = i18n.locales.some((cur) => cur === params.lang)
  if (!isValidLocale) notFound()

  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body className={`${roboto.variable} bg-gray-800 text-gray-100`}>
        <NextIntlClientProvider locale={params.lang}>
          <Structor>
            {children}
          </Structor>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

