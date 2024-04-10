import React from "react";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import CodeSnippet from "./CodeSnippet";

const Hero = () => {
  return (
    <div className="flex item-center max-lg:flex-col justify-start h-[80vh] max-lg:py-24 max-lg:px-2   xl:h-[45rem] relative text-black ">
      <section className="flex flex-col justify-center items-start xl:w-4/6 lg:px-20 px-2   ">
        <h2 className="font-semibold text-gray-500 text-lg md:text-2  xl lg:text-2xl">
          Hi ,I am Shiva. 👋
        </h2>

        <h1 className="font-bold text-2xl md:text-3xl  xl:text-7xl ">
          A FullStack Web Developer
        </h1>

        <p className=" text-base lg:text-lg text-gray-500 pt-4 xl:w-1/2">
          I built this template for everyone who is looking to create a new
          personal portfolio website. You can write your own blurb here. 

        </p>

        <div className="py-8 flex gap-4 max-lg:w-full justify-center">
          <Link href={"/contact"} className="hover:bg-white hover:text-black  border border-transparent ease-in-out transition-all duration-100 rounded-xl  btn  btn-neutral">
            Get In Touch
          </Link>
          <Link href={"#projects"} className=" btn btn-outline shadow-md">
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
