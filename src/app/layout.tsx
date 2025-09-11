import '../shared/assets/styles/globals.css'

import type { Metadata } from 'next'
import { Marck_Script, Roboto } from 'next/font/google'

import { siteConfig } from '@/config/site'

const roboto = Roboto({
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning={true}>
      <body
        suppressHydrationWarning={true}
        className={`${roboto.variable} ${MarckScript.variable} bg-gray-700 text-gray-100 antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
