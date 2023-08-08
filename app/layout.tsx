import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import ThemeProvider from '@/components/ThemeProvider'
import Header from '@/components/Header'
import Socials from '@/components/Socials'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
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
        <body className={`${roboto.className} relative m-auto px-8 h-screen text-primary bg-background`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className={"pt-20 h-full flex flex-col" + " " + roboto.className}>
            {children}
          </main>
          <Socials />
        </ThemeProvider>
        </body>
    </html>
  )
}
