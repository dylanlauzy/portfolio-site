'use client'

import { usePathname } from 'next/navigation'

import Image from 'next/image'
import NavItem from './NavItem'

const Navbar = () => {
  const path = usePathname()

  return (
    <nav className="flex items-center gap-x-10">
      <NavItem route="projects" currPath={path}/>
      <NavItem route="about" currPath={path}/>
      <NavItem route="photos" currPath={path}/>
      <NavItem route="favourites" currPath={path}/>
      <button>
        <Image src="/icons/moon.svg" alt="moon" width={22} height={22} />
      </button>
    </nav>
  )
}

export default Navbar