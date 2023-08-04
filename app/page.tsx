import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <main className={"h-full" + " " + roboto.className}>
      <div className="max-w-lg text-lg leading-6">I'm a <span className="text-red-600">developer</span> from Singapore exploring how data and software can be applied to novel problems</div>
    </main>
  )
}
