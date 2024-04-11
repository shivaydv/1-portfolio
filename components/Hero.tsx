import React from "react";
import Link from "next/link";
import CodeSnippet from "./CodeSnippet";

const Hero = () => {
  return (
    <div className="flex item-center max-lg:flex-col justify-start  max-lg:py-24 max-lg:px-2 h-[45rem]  lg:h-[50rem] relative text-black ">
      <section className="flex flex-col justify-center items-start xl:w-4/6 lg:px-20 px-2   ">
        <h2 className="font-semibold text-gray-500 text-lg md:text-2  xl lg:text-2xl">
          Hi ,I am Shiva. 👋
        </h2>

        <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl  xl:text-7xl ">
          A FullStack Web Developer
        </h1>

        <p className=" text-base lg:text-lg text-gray-500 pt-4 xl:w-1/2">
          I speacialize in building web applications with modern technologies and frameworks. can help you build your next project.

        </p>

        <div className="py-8 flex gap-4 max-lg:w-full justify-center">
          <Link href={"/contact"} className="  btn  btn-outline shadow-md">
            Get In Touch
          </Link>
          <Link href={"#projects"} className=" btn btn-outline shadow-md ">
            Browse Projects
          </Link>
        </div>
      </section>

      <section className="flex justify-center items-center flex-grow  ">
        <CodeSnippet />
      </section>
    </div>
  );
};

export default Hero;
