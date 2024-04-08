"use client"
import React from 'react'
import { HoverEffect } from './ui/card-hover-effect'
import { skills } from '@/lib/data';
import {motion} from "framer-motion"

const SkillSection = () => {
  return (
    <motion.div
    initial="hidden"
      whileInView="visible"
      viewport={{ once: true ,amount:0.3}}
      transition={{ duration: 1,ease:"easeInOut" }}
      variants={{
        visible: { opacity: 1,y:"0px"  },
        hidden: { opacity: 0,y:"300px" }
      }}
    className="max-w-5xl mx-auto px-8">
      <HoverEffect items={skills} />
      </motion.div>
  )
}

export default SkillSection