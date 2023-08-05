import Image from "next/image"

const SocialItem = ({type, href}: {type: string, href: string}) => {
  return (
    <a target="_blank" href={href} className="relative w-12 h-12 opacity-25 hover:opacity-100 transition-all">
      <Image src={`/icons/${type}.svg`} alt={type} fill={true}/>
    </a>
  )
}

export default SocialItem