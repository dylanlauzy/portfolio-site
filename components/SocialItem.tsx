"use client"

import Image from "next/image"
import { useTheme } from "next-themes"
import { useState, useEffect } from 'react'

const SocialItem = ({type, href}: {type: string, href: string}) => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <a target="_blank" href={href} className="relative w-8 h-8 2xl:w-10 2xl:h-10 opacity-50 hover:opacity-100 transition-all">
      {mounted && <Image src={`/icons/${type}-${resolvedTheme}.svg`} alt={type} fill={true}/>}
    </a>
  )
}

export default SocialItem