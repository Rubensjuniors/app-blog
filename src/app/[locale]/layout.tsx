import '../../shared/assets/styles/globals.css'

import type { Metadata } from 'next'
import { Marck_Script, Nunito } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { ReactNode } from 'react'

import { siteConfig } from '@/config/site'
import { Structuor } from '@/layouts/Structor'

const nunito = Nunito({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

const MarckScript = Marck_Script({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-marck-script',
  weight: '400',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Rubens Junio',
    default: 'Rubens Junio',
  },
  icons: [{ rel: 'icon', url: '/icons/Favicon.svg' }],
  description: siteConfig.subtitle,
  authors: [{ name: 'Rubens Junio' }],
}

interface RootLayoutProps {
  children: ReactNode
  params: {
    locale: string
  }
}

export default async function RootLayout({ children, params: { locale } }: RootLayoutProps) {
  const messages = await getMessages()
  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <body
        suppressHydrationWarning={true}
        className={`${nunito.variable} ${MarckScript.variable} bg-background text-gray-100 antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Structuor>{children}</Structuor>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
