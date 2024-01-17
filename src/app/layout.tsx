import './globals.css'

import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Image from 'next/image'

import logoImg from '../assets/logo.svg'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ignite Shop',
  description: 'Ignite Shop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={roboto.className}>
        <div className="flex min-h-screen flex-col items-start justify-center">
          <header className="mx-auto w-full max-w-[1180px] px-0 py-8">
            <Image src={logoImg} alt="" />
          </header>
          {children}
        </div>
      </body>
    </html>
  )
}
