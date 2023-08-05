import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'

import Image from 'next/image'
import Link from 'next/link'

import Providers from '@/components/Providers'
import Navbar from '@/components/Navbar'
import Socials from '@/components/Socials'

const notoSans = Noto_Sans({
  weight: ["400", "500"],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dylan Lau',
  description: 'Dylan Lau is a developer from Singapore exploring how data and software can be applied to novel problems',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={`${notoSans.className} relative m-auto px-8 h-screen text-primary`}>
        <Providers>
          <header className="fixed  w-full flex justify-between py-6 pr-16">
            <Link href="/">
              <div className="flex items-center gap-x-1">
                <Image src="/icons/logo.png" alt="Logo" width={24} height={24} />
                <div className="font-medium text-2xl">Dylan Lau</div>
              </div>
            </Link>
            <Navbar />
          </header>
          {children}
          <Socials />
        </Providers>
        </body>
    </html>
  )
}
