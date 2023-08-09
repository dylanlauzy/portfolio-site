import Image from 'next/image'
import ProjectPreviews from '@/components/ProjectPreviews'
import RotatingTitle from '@/components/RotatingTitle'

export default function Home() {
  return (
    <>
      <div className="max-w-lg text-lg leading-6">I'm a <RotatingTitle /> from Singapore exploring how data and software can be applied to novel problems</div>
      <div className="flex justify-between h-full gap-x-10">
        <div className="mt-6 mb-auto relative aspect-[3/4] min-w-[300px] xl:w-[25rem]">
          <Image
            className="brightness-110 bg-cover"
            src="/images/profile.png"
            alt="portrait of me"
            fill
          />
        </div>
        <ProjectPreviews />
      </div>
    </>
  )
}
