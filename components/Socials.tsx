import Image from "next/image"
import SocialItem from "./SocialItem"

const Socials = () => {
  return (
    <div className="fixed left-8 bottom-0 flex flex-col gap-y-3 items-center">
      <SocialItem type="github" href="https://github.com/dylanlauzy"/>
      <SocialItem type="linkedin" href="https://www.linkedin.com/in/dylanzylau/"/>
      <SocialItem type="twitter" href="https://twitter.com/dylanzylau"/>
      <SocialItem type="resume" href="https://www.linkedin.com/in/dylanzylau/"/>
      <div className="h-7 w-0.5 bg-gray-300" />
    </div>
  )
}

export default Socials