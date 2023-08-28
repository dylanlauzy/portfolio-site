"use client"
import { motion } from 'framer-motion'

import Image from 'next/image'
import ProjectPreviews from '@/components/ProjectPreviews'
import RotatingTitle from '@/components/RotatingTitle'

export default function Home() {
  return (
    <>
      <motion.div
        className="max-w-lg text-lg leading-6"
        transition={{delay: 0.1, duration: 1}}
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y: 20}}
      >I'm a <RotatingTitle /> from Singapore exploring how data and software can be applied to novel problems</motion.div>
      <div className="flex justify-between h-full gap-x-10">
        <motion.div
          className="mt-6 mb-auto relative aspect-[3/4] min-w-[300px] xl:w-[25rem]"
          transition={{delay: 0.5, duration: 1}}
          initial={{opacity: 0, x: 20}}
          animate={{opacity: 1, x: 0}}
          exit={{opacity: 0, x: 20}}
        >
          <Image
            className="brightness-110 bg-cover"
            src="/images/profile.png"
            alt="portrait of me"
            fill
          />
        </motion.div>
        <ProjectPreviews />
      </div>
    </>
  )
}
