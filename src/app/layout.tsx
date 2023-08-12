import './globals.css'
import type { Metadata } from 'next'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree
} from 'next/font/google'
import { ReactNode } from 'react'

import Structor from '@/components/structure/Structor.component'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree'
})
export const metadata: Metadata = {
  title: 'Blog',
  description: 'My name is Rubens this is my blog'
}

const Layout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <body className={`${roboto.variable} ${baiJamjuree.variable}`}>
      <Structor>{children}</Structor>
    </body>
  </html>
)

export default Layout
