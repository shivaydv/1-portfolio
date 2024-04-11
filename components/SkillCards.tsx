"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import React from "react";

import { skills } from "@/lib/data";

export const SkillCards = () => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-3 w-fit ")}>
      {skills.map((item, idx) => (
        <div
          key={item?.title + idx}
          className="relative group  block p-2 lg:h-64 lg:w-64 h-32 w-32"
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
              {item.icon({className:"w-8 h-8 lg:w-12 lg:h-12"})}
            </span>
            <h3 className="font-semibold max-lg:text-sm  tracking-wider w-full">
              {item.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};
