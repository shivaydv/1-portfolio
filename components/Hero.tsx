import Image from "next/image";
import React from "react";

import { FaArrowDown } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  {
    /* TASK : make eye catching hero section and also add call to action  button. for projects and hire me / contact */
  }
  return (
    <section className="flex item-center  justify-start h-[80vh]  xl:h-[45rem] relative text-black ">
      <div className="flex flex-col justify-center items-start  lg:px-20 px-2 max-lg:py-24   ">
        <h2 className="font-semibold text-gray-500 text-lg md:text-xl lg:text-2xl">
          Hi ,I am Shiva. 👋
        </h2>
        <h1 className="font-bold text-2xl  lg:text-7xl ">
          A FullStack Developer and<br className="lg:hidden"/> Web Designer
        </h1>
        <p className=" text-base lg:text-lg text-gray-500 pt-4 lg:w-1/2">
          I built this template for everyone who is looking to create a new
          personal portfolio website. You can write your own blurb here. 😃{" "}
        </p>
        <div className="py-8 flex gap-4 max-lg:w-full justify-center">
          <Link
            href={"/contact"}
            className="bg-black text-white rounded-md px-4 py-2 shadow-md"
          >
            Get In Touch
          </Link>
          <Link
            href={"#projects"}
            className=" bg-white text-black  border rounded-md px-4 py-2 shadow-md"
          >
            Browse Projects
          </Link>
        </div>
      </div>

<div className="absolute bottom-0 flex justify-center items-center w-full">

    <Link href={"#skills"} className=""><FaArrowDown size={18} /></Link>
</div>
    
      {/* <div className="w-full h-full absolute top-0 right-0 -z-10 max-lg:rotate-45">
        <Image src={"/Gradient.png"} fill alt="background overlay" priority className=" max-lg:scale-125 " />
      </div> */}

      
    </section>
  );
};

export default Hero;
