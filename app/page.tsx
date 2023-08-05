import { Roboto } from 'next/font/google'
import Image from 'next/image'
import ProjectPreviews from '@/components/ProjectPreviews'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export default function Home() {
  return (
    <main className={"pt-20 h-full flex flex-col" + " " + roboto.className}>
      {/* TODO: turn span into its own client component for allowing toggle of title */}
      <div className="max-w-lg text-lg leading-6">I'm a <span className="text-red-600">developer</span> from Singapore exploring how data and software can be applied to novel problems</div>
      <section className="flex justify-between h-full max-xl:gap-x-10">
        <Image className="brightness-110 pt-6 mb-auto" src="/images/profile.png" alt="portrait of me" width={300} height={400}/>
        <ProjectPreviews />
      </section>
    </main>
  )
}
