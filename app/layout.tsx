import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'

import Image from 'next/image'
import Link from 'next/link'

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
      <body className={`${notoSans.className} px-8`}>
        <header className="fixed w-full flex justify-between py-6">
          <Link href="/">
            <div className="flex items-center gap-x-1">
              <Image src="/logo.png" alt="Logo" width={24} height={24} />
              <div className="font-medium text-2xl">Dylan Lau</div>
            </div>
          </Link>
          <Navbar />
        </header>
        <main className="flex min-h-screen flex-col pt-20">
          {children}
          <Socials />
        </main>
      </body>
    </html>
  )
}
