import Image from "next/image";
import React from "react";

import { FaArrowDown } from "react-icons/fa";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const Hero = () => {
  {
    /* TASK : make eye catching hero section and also add call to action  button. for projects and hire me / contact */
  }
  return (
    <section className="flex item-center max-lg:flex-col justify-start h-[80vh] max-lg:py-24 max-lg:px-2   xl:h-[45rem] relative text-black ">
      <div className="flex flex-col justify-center items-start xl:w-4/6 lg:px-20 px-2   ">
        <h2 className="font-semibold text-gray-500 text-lg md:text-2  xl lg:text-2xl">
          Hi ,I am Shiva. 👋
        </h2>

        <h1 className="font-bold text-2xl md:text-3xl  xl:text-7xl ">
          A FullStack Web Developer
          {/* <br className="lg:hidden" /> Web Designer */}
        </h1>

        <p className=" text-base lg:text-lg text-gray-500 pt-4 xl:w-1/2">
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

      <section className="flex justify-center items-center flex-grow  ">
        <CardContainer className="  max-lg:pt-10  ">
          <CardBody>
            <CardItem
              translateZ="60"
              className="mockup-code overflow-hidden w-[96%] mx-auto lg:w-full max-lg:text-sm lg:h-72 shadow-black shadow-2xl   "
            >
              
                <CardItem translateX={10} translateY={10}>
                <pre data-prefix=">>" className="font-mono tracking-wide max-lg:hidden">
                <code className="text-error font-bold text-lg ">Hover Me</code>
              </pre>
                <pre data-prefix=">>" className=" font-mono tracking-wide">
                <code>{codetext}</code>
              </pre>
                </CardItem>
              
            </CardItem>
          </CardBody>
        </CardContainer>

        
      </section>

      <div className="absolute bottom-0 mb-2 flex justify-center items-center w-full ">
        <Link href={"#skills"} className="animate-bounce">
          <FaArrowDown size={18} />
        </Link>
      </div>

      {/* <div className="w-full h-full absolute top-0 right-0 -z-10 max-lg:rotate-45">
        <Image src={"/Gradient.png"} fill alt="background overlay" priority className=" max-lg:scale-125 " />
      </div> */}
    </section>
  );
};

export default Hero;

const codetext = `const developerProfile = {
      name: "Shiva Yadav",
      title: "Web Developer",
      skills: ["Next.js", "Tailwind CSS,...]],
      education: "BTech CS IOT, AKTU",
      };

      console.log(developerProfile);
  `;
