'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'

import Image from 'next/image'
import NavItem from './NavItem'

const Navbar = () => {
  const path = usePathname()
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme == "light" ? "dark" : "light")
  }

  if (!mounted) {
    return null
  }

  return (
    <nav className="flex items-center gap-x-10">
      <NavItem route="projects" currPath={path}/>
      <NavItem route="about" currPath={path}/>
      <NavItem route="photos" currPath={path}/>
      <NavItem route="favourites" currPath={path}/>
      <button onClick={toggleTheme}>
        <Image src={theme == "light" ? "/icons/sun.svg" : "/icons/moon.svg"} alt="moon" width={22} height={22} />
      </button>
    </nav>
  )
}

export default Navbar