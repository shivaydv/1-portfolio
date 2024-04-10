"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { IconType } from "react-icons";
import React from "react";
import {
  SiFigma,
  SiFirebase,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";

export const SkillCards = () => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-2   lg:grid-cols-3 w-fit ")}>
      {skills.map((item, idx) => (
        <div
          key={item?.title + idx}
          className="relative group  block p-2 lg:h-64 lg:w-64 h-40 w-40"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full  bg-error block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>

          <div className="bg-white border text-black/80  hover:border-4 hover:border-black rounded-xl aspect-square z-50 relative gap-2  flex-col flex justify-center items-center">
            <span className="">
              {React.createElement(item.icon, {
                className: "w-10 h-10 lg:w-12 lg:h-12",
              })}
            </span>
            <h3 className="font-semibold  tracking-wider w-full">
              {item.title}
            </h3>
          </div>
          
        </div>
      ))}
    </div>
  );
};



interface skillProps {
  title: string;
  icon: IconType;
}

export const skills: skillProps[] = [
  {
    title: "React",
    icon: SiReact,
  },
  {
    title: "NextJS",
    icon: SiNextdotjs,
  },
  {
    title: "Tailwind",
    icon: SiTailwindcss,
  },
  {
    title: "JavaScript",
    icon: SiJavascript,
  },
  {
    title: "Node JS",
    icon: IoLogoNodejs,
  },
  {
    title: "TypeScript",
    icon: SiTypescript,
  },
  {
    title: "Git",
    icon: SiGit,
  },
  
  {
    title: "MongoDB",
    icon: SiMongodb,
  },
  {
    title: "Figma",
    icon: SiFigma,
  },
];
