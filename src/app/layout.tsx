import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

import Structor from '@/components/structure/Structor.component'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blog',
  description: 'My name is Rubens this is my blog'
}

const Layout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <body className={inter.className}>
      <Structor>{children}</Structor>
    </body>
  </html>
)

export default Layout
