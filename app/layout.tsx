import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'

import Image from 'next/image'
import Link from 'next/link'

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
          <div className="flex items-center gap-x-1">
            <Image src="/logo.png" alt="Logo" width={24} height={24} />
            <div className="font-medium text-2xl">Dylan Lau</div>
          </div>
          <nav className="flex items-center gap-x-10">
            <Link href="/">Projects</Link>
            <Link href="/about">About</Link>
            <Link href="/photos">Photos</Link>
            <Link href="/favourites">Favourites</Link>
            <button>
              <Image src="/moon.svg" alt="moon" width={22} height={22} />
            </button>
          </nav>
        </header>
        <main className="flex min-h-screen flex-col items-center justify-between pt-20">
          {children}
        </main>
      </body>
    </html>
  )
}
