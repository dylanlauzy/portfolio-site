import projects from "@/data/projects.json"

import TransitionWrapper from "@/components/TransitionWrapper"
import Image from "next/image"
import { ScrollArea } from "@/components/ui/scroll-area"
import Timeline from "@/components/Timeline"

const page = ({ params }: { params: { id: string}}) => {
  const project = projects.find((project) => project.id === params.id)

  if (!project) {
    return (
      <div>Project not found</div>
    )
  }

  return (
    // Introduce breadcrumb
    <ScrollArea className="w-full">
      <TransitionWrapper
        delay={0.1}
        className="w-full max-w-screen-xl mx-auto flex flex-col gap-y-7 px-10 pb-10"
      >
        <section className="flex flex-col m w-full border-y-2 py-7 px-6 gap-x-7 gap-y-8">
          <div className="flex flex-col gap-y-7">
            <div className="flex flex-col gap-y-2">
              <h2 className="text-xl lg:text-3xl text-gray-500">{project?.date}</h2>
              <h1 className="text-4xl lg:text-5xl text-primary">{project?.title}</h1>
              <h3 className="text-sm lg:text-lg text-gray-400">{project ? project.technologies?.join(" \u2022 "): ""}</h3>
            </div>
            <div className="">{project?.description_long}</div>
          </div>
          <div className="grow flex">
            <div className="relative w-full aspect-video my-auto">
              <Image
                src={project ? project.image : ""}
                alt="project preview"
                fill
                className="object-cover object-left-top"
              />
            </div>
          </div>
        </section>
        <section className="grow px-6">
          <div className="w-full flex gap-x-10">
            <div className="w-full flex flex-col gap-y-2">
              <h4 className="font-bold">Motivations</h4>
              <div className="whitespace-pre-wrap text-sm">{project?.motivations}</div>
            </div>
            <div className="w-full flex flex-col gap-y-2">
              <h4 className="font-bold">Features</h4>
              <ul className="flex flex-col gap-y-3 text-sm">
                {project?.features?.map((feature: string, id: number) => (
                  <li className="flex items-start gap-x-1" key={id}>
                    <Image className="mt-1" src="/icons/check.svg" alt="check" width={16} height={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full flex flex-col gap-y-2">
              <h4 className="font-bold">Timeline</h4>
              {project.timeline && <Timeline events={project.timeline} isActive={project.is_active}/>}
            </div>
          </div>
        </section>
      </TransitionWrapper>
    </ScrollArea>
  )
}

export default page