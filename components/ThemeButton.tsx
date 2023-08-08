'use client'

import { useTheme } from 'next-themes'

import Image from 'next/image'
import { Button } from './ui/button'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from './ui/dropdown-menu'

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Image className="absolute transition-all dark:-rotate-90 dark:scale-0rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" src="/icons/sun.svg" alt="sun" width={22} height={22} />
          <Image className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" src="/icons/moon.svg" alt="moon" width={22} height={22} />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ThemeButton