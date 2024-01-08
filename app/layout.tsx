import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'

import './globals.css'


const nunitosans = Nunito_Sans({subsets: ['latin']})



export const metadata: Metadata = {
  title: '2024 Osaps Cebu',
  description: 'Secure your spot! Register Now',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunitosans.className}>{children}</body>
    </html>
  )
}
