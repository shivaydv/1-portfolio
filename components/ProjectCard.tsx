"use client";
 
import React, { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
// import { cn } from "@/utils/cn";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { IconType } from "react-icons";



interface projectCardProps{
    title:string;     
    link?:string;
    src:string;  
    description?: string;  
    category?:string[];
    techstack?:IconType[];
}


const ProjectCard:React.FC<projectCardProps> = ({title,src}) => {
    
  return (
    <div className=" relative  flex items-center justify-center">
      <DirectionAwareHover imageUrl={src}>
        <p className="font-bold text-xl">{title}</p>
        <p className="font-normal text-sm">$1299 / night</p>
      </DirectionAwareHover>
    </div>
  );
}

export default ProjectCard