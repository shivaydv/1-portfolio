"use client";
import { skills } from "@/components/SkillCards";
import { CardBody, CardContainer } from "@/components/ui/3d-card";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuExternalLink } from "react-icons/lu";

const page = () => {
  return (
    <div className="flex justify-center max-lg:flex-col items-center px-8  py-10 flex-1">
      <section
        className="w-full lg:w-1/3 flex flex-col justify-center
       items-center max-lg:px-10 max-lg:pb-10 "
      >
        <CardContainer>
          <CardBody className="w-80 lg:w-96  relative ">
            <Image
              src={"/shiva.jpeg"}
              alt="profile"
              width={1000}
              height={1000}
              priority
              className=" object-cover rounded-xl shadow-lg mb-4"
            />
            <h1 className="font-semibold text-xl lg:text-2xl text-center">
              Shiva Yadav
            </h1>
            <p className="  max-lg:text-sm font-normal text-center">
              Fullstack Developer | Freelancer
            </p>
          </CardBody>
        </CardContainer>
      </section>

      <section className="w-full lg:w-2/3  lg:px-20">
        <div className="flex flex-col justify-center items-left space-y-2  ">
          <h1 className="font-bold text-xl">About Me</h1>
          <p className="max-lg:text-sm font-normal tracking-wide">
          Hey there! I am Shiva, a full-stack web developer currently pursuing
            my B.Tech in Computer Science from SR Group of Institutions, AKTU. I
            love making Websites or Apps that are both functional and beautiful.
          </p>
          <p className="max-lg:text-sm font-normal tracking-wide">
            I am a quick learner and a team player who is always ready to
            collaborate with others to create something amazing. Apart from
            coding, I love to play basketball and workout.
          </p>
        </div>

        <div className="flex flex-col justify-center items-left space-y-2 lg:space-y-4 pt-4">
          <h1 className="font-bold text-xl">Skills</h1>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, idx) => (
              <span
                key={skill.title + idx}
                className="bg-gray-200 dark:bg-gray-800 px-2 py-1 max-lg:text-sm rounded-lg"
              >
                {skill.title}
              </span>
            ))}
          </div>
        </div>

        <section className="lg:flex justify-between py-4 lg:py-8 ">
          <div className="flex flex-col  items-left justify-between lg:w-1/2 space-y-3 ">
            <h1 className="font-bold text-xl ">Experience</h1>
            <div className="flex flex-col justify-center items-left ">
              <h2 className="font-semibold text-gray-500 ">Freelancer</h2>
              <p className="text-sm font-normal">
                Web Developer
                <br />
                2023 - Present
              </p>
            </div>
          </div>
          <div className="divider divider-horizontal"></div>

          <div className="flex flex-col  items-left justify-between lg:w-1/2 space-y-3 max-lg:pt-4">
            <h1 className="font-bold text-xl  ">Education</h1>
            <div className="flex flex-col justify-center items-left  ">
              <h2 className="font-semibold text-gray-500 ">
                SR Group of Institutions, Jhansi
              </h2>
              <p className="text-sm font-normal">
                Bachelor of Technology in Computer Science
                <br />
                2022 - Present
              </p>
            </div>
          </div>
        </section>
        <div className="flex  justify-between items-left font-semibold  border-black py-4 border-y my-4">
          <Link
            href="/projects"
            className=" flex gap-1 justify-center items-center "
          >
            Projects
            <LuExternalLink />
          </Link>
          <Link
            href="https://medium.com/@shivaydv"
            className=" flex gap-1 justify-center items-center "
          >
            Blogs
            <LuExternalLink />
          </Link>
          <Link
            href="https://www.youtube.com/@shivay1256/videos"
            className=" flex gap-1 justify-center items-center "
          >
            Videos
            <LuExternalLink />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default page;
