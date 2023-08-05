import { Roboto } from 'next/font/google'
import Image from 'next/image'
import ProjectPreviews from '@/components/ProjectPreviews'
import RotatingTitle from '@/components/RotatingTitle'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export default function Home() {
  return (
    <>
      <div className="max-w-lg text-lg leading-6">I'm a <RotatingTitle /> from Singapore exploring how data and software can be applied to novel problems</div>
      <div className="flex justify-between h-full gap-x-10">
        <Image className="brightness-110 pt-6 mb-auto" src="/images/profile.png" alt="portrait of me" width={300} height={400}/>
        <ProjectPreviews />
      </div>
    </>
  )
}
