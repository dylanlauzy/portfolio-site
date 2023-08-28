"use client"
import about from "@/data/about.json"
import { motion } from "framer-motion"

import Image from "next/image"
import { ScrollArea } from "@/components/ui/scroll-area"

import { Noto_Sans } from 'next/font/google'

const notoSans = Noto_Sans({
  weight: ["300"],
  subsets: ['latin'],
  display: 'swap',
})

export default function Page() {
  return (
    <ScrollArea className="w-full">
      <motion.div
        className="w-full max-w-screen-lg 2xl:max-w-screen-xl mx-auto flex flex-col gap-y-7 px-10"
        transition={{delay: 0.1, duration: 1}}
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
      >
        <section className="py-10 flex gap-x-20 items-center justify-center">
          <div className={`${notoSans.className} text-4xl w-[32rem]`}>I'm Dylan, a developer, student and explorer of cool stuff.</div>
          <div className="relative h-56 w-56">
            <Image
              src="/images/me.png"
              alt="Dylan Lau headshot"
              fill
              className="object-cover rounded-full"
            />
          </div>
        </section>
        <section className="flex gap-x-18 border-t-2 py-8">
          <div className="min-w-[10rem] text-gray-400">My Story</div>
          <div className="">I spent the first 20 years of my life in Singapore, a vibrant city-state that seamlessly fuses the traditional and the contemporary. Growing up amidst the juxtaposition of towering skyscrapers and historical temples, I cultivated a deep appreciation for cultural diversity and the art of balance. This rich tapestry of experiences in Singapore shaped my perspective of the world, instilling in me a passion for exploring different cultures, cuisines, and communities. Today, I carry the spirit of the Lion City wherever I go, seeking to blend the lessons of the past with the innovations of the future.</div>
        </section>
        <section className="flex gap-x-18 py-8 border-t-2">
          <div className="min-w-[10rem] text-gray-400">Experiences</div>
          <div className="flex flex-col gap-y-2">
            {about.experiences.map((experience, index) => (
              <div className="text-gray-400"><span className="text-primary">{experience.organisation}</span> — {experience.position}, {experience.duration}</div>
            ))}
          </div>
        </section>
      </motion.div>
    </ScrollArea>
  )
}