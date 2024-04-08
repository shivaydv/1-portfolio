
import React from 'react'
import { HoverEffect } from './ui/card-hover-effect'
import { skills } from '@/lib/data';


const SkillSection = () => {
  return (
    <section id='skills'
    className="text-center  pt-16 ">

      <h1 className='text-lg mx-auto w-full  '>Skills</h1>
    <div
    className="max-w-5xl mx-auto px-8">
      <HoverEffect items={skills} />
      </div>
    </section>
  )
}

export default SkillSection