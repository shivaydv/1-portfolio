import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin, BsMedium, BsTwitterX, BsYoutube } from 'react-icons/bs'

type SocialProps = {
  className?: string
}

const Social = ({ className }: SocialProps) => {
  return (
    <div className={`grid grid-flow-col ${className} gap-6 `}>
        <a href=""><BsGithub size={22}/></a>
        <a href=""><BsLinkedin size={22} /></a>
        <a href=""><BsYoutube size={22}/></a>
        <a href=""><BsInstagram size={22}/></a>
        <a href=""><BsTwitterX size={22} /></a>
        <a href=""><BsMedium size={22}/></a>
    </div>
  )
}

export default Social