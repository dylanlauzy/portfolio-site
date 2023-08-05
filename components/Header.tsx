import { Noto_Sans } from 'next/font/google'

import Image from 'next/image'
import Link from 'next/link'

import Navbar from './Navbar'

const notoSans = Noto_Sans({
  weight: ["400", "500"],
  subsets: ['latin'],
  display: 'swap',
})

const Header = () => {
  return (
    <header className={`${notoSans.className} fixed w-full flex justify-between py-6 pr-16`}>
      <Link href="/">
        <div className="flex items-center gap-x-1">
          <Image src="/icons/logo.png" alt="Logo" width={24} height={24} />
          <div className="font-medium text-2xl">Dylan Lau</div>
        </div>
      </Link>
      <Navbar />
    </header>
  )
}

export default Header