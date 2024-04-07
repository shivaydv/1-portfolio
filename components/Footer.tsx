import React from 'react'
import Logo from './Logo'
import { Linkedin } from 'lucide-react'
import { BsGithub, BsInstagram, BsLinkedin, BsMedium, BsTwitterX, BsYoutube } from 'react-icons/bs'
import Social from './Social'


const Footer = () => {
  return (
    <div >
<footer className=" p-10 bg-base-200 text-base-content  ">
    <div className='container mx-auto footer'>

  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
    </div>
</footer> 

<footer className=" px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
<div className='container mx-auto footer'>

  <aside className="items-center grid-flow-col">
    <Logo/>
    <p>	&#169;2024. All rights reserved.</p>
  </aside> 

  <nav className="md:place-self-center md:justify-self-end">
    <Social/>
  </nav>

</div>
</footer>
    </div>
  )
}

export default Footer