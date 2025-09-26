import React from 'react'
import './styles.css'
import { Noto_Sans_TC } from 'next/font/google'

import Footer from './Footer'

const notoSansTC = Noto_Sans_TC({
  subsets: ['latin'],
})

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'GooJob Website',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="zh-TW">
      <body className={`${notoSansTC.className} antialiased bg-background`}>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
