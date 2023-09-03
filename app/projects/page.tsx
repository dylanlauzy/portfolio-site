import projects from "@/data/projects.json"

import TransitionWrapper from "@/components/TransitionWrapper"
import Image from "next/image"
import Link from "next/link"
import { ScrollArea } from "@/components/ui/scroll-area"

import { Noto_Sans } from 'next/font/google'

const notoSans = Noto_Sans({
  weight: ["300"],
  subsets: ['latin'],
  display: 'swap',
})

const page = () => {
  return (
    <ScrollArea className="w-full">
      <TransitionWrapper
      delay={0.1}
      className="w-full max-w-screen-lg 2xl:max-w-screen-2xl mx-auto flex flex-col px-10">
        <div className={`w-full text-2xl xl:text-3xl py-10 ${notoSans.className}`}>
        "True north in software is often the direction that combines ambiguity and evidence of fertility in the most alluring way: the direction of maximal interestingness.”
        </div>
        {projects.map((project, key) => (
          <Link href={`/projects/${project.id}`} className={`flex w-full border-t-2 py-12 gap-x-3`}>
            <div className="relative w-full aspect-[5/3] border-2">
              <Image
                src={project.image}
                alt="project preview"
                fill
                className="object-cover object-left-top transition-all hover:opacity-50"
              />
            </div>
            <div className="flex flex-col gap-y-1 w-[32rem]">
              <h2 className="text-lg text-gray-400 lg:text-2xl">{project.date}</h2>
              <h1 className="text-3xl lg:text-4xl">{project.title}</h1>
              <h3 className="text-md text-gray-400">{project.technologies?.join(" \u2022 ")}</h3>
            </div>
          </Link>
        ))}
      </TransitionWrapper>
    </ScrollArea>
  )
}

export default page