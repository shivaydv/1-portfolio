import Link from 'next/link'
import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin, BsMedium, BsTwitterX, BsYoutube } from 'react-icons/bs'

type SocialProps = {
  className?: string
}

const Social = ({ className }: SocialProps) => {
  return (
    <div className={`grid grid-flow-col ${className} gap-6 `}>
        <Link href="https://github.com/Shivaydv"><BsGithub size={22}/></Link>
        <Link href="https://www.linkedin.com/in/shivaydv/"><BsLinkedin size={22} /></Link>
        <Link href="https://www.youtube.com/@shivay1256"><BsYoutube size={22}/></Link>
        <Link href="https://www.instagram.com/shivay1256/"><BsInstagram size={22}/></Link>
        <Link href="https://twitter.com/Shivay1256"><BsTwitterX size={22} /></Link>
        <Link href="https://medium.com/@shivaydv"><BsMedium size={22}/></Link>
    </div>
  )
}

export default Social