import './globals.css'
import type { Metadata } from 'next'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree
} from 'next/font/google'
import { ReactNode, Suspense } from 'react'

import Structor from '@/components/structure/Structor.component'

import LogoDesktop from '../../public/assets/img/icon/gym.svg'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree'
})
export const metadata: Metadata = {
  title: 'Blog',
  description: 'My name is Rubens this is my blog',
  icons: [{ rel: 'icon', url: LogoDesktop.src }]
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
