import about from "@/data/about.json"

import TransitionWrapper from "@/components/TransitionWrapper"
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
      <TransitionWrapper
        delay={0.1}
        className="w-full max-w-screen-lg 2xl:max-w-screen-xl mx-auto flex flex-col gap-y-7 px-10"
      >
        <section className="py-10 flex gap-x-20 items-center justify-center">
          <div className={`${notoSans.className} text-4xl w-[32rem]`}>{"I'm Dylan, a developer, student and explorer of cool stuff."}</div>
          <div className="relative h-56 w-56">
            <Image
              key="/images/me.png"
              src="/images/me.png"
              alt="Dylan Lau headshot"
              fill
              className="object-cover rounded-full"
            />
          </div>
        </section>
        <section className="flex gap-x-18 border-t-2 py-8">
          <div className="min-w-[10rem] text-gray-400">My Story</div>
          <div className="">{about.bio}</div>
        </section>
        <section className="flex gap-x-18 py-8 border-t-2">
          <div className="min-w-[10rem] text-gray-400">Experiences</div>
          <div className="flex flex-col gap-y-2">
            {about.experiences.map((experience, index) => (
              <div className="text-gray-400" key={index}><span className="text-primary">{experience.organisation}</span> — {experience.position}, {experience.duration}</div>
            ))}
          </div>
        </section>
      </TransitionWrapper>
    </ScrollArea>
  )
}