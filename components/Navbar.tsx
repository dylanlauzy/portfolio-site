'use client'

import { usePathname } from 'next/navigation'

import NavItem from './NavItem'
import ThemeButton from './ThemeButton'

const Navbar = () => {
  const path = usePathname()

  return (
    <nav className="flex items-center gap-x-10">
      <NavItem route="about" currPath={path}/>
      <NavItem route="projects" currPath={path}/>
      <ThemeButton />
    </nav>
  )
}

export default Navbar