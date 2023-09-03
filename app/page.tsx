import TransitionWrapper from "@/components/TransitionWrapper";
import Image from "next/image";
import ProjectPreviews from "@/components/ProjectPreviews";
import RotatingTitle from "@/components/RotatingTitle";

export default function Home() {
  return (
    <>
      <TransitionWrapper delay={0.1} className="max-w-lg text-lg leading-6">
        I'm a <RotatingTitle /> from Singapore exploring how data and software
        can be applied to novel problems
      </TransitionWrapper>
      <div className="flex justify-between h-full gap-x-10">
        <TransitionWrapper
          delay={0.5}
          className="mt-6 mb-auto relative aspect-[3/4] min-w-[300px] xl:w-[25rem]"
        >
          <Image
            className="brightness-110 bg-cover"
            src="/images/profile.png"
            alt="portrait of me"
            fill
          />
        </TransitionWrapper>
        <ProjectPreviews />
      </div>
    </>
  );
}
