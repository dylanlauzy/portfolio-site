import Image from "next/image"

const SocialItem = ({type, href}: {type: string, href: string}) => {
  return (
    <a target="_blank" href={href} className="opacity-25 hover:opacity-100 transition-all">
      <Image src={`/icons/${type}.svg`} alt={type} width={35} height={35}/>
    </a>
  )
}

export default SocialItem