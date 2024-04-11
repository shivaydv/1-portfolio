import Link from "next/link";
import React from "react";
import { BiMailSend } from "react-icons/bi";
import { MdCall } from "react-icons/md";
import Social from "./Social";
import { BackgroundBeams } from "./ui/background-beam";

const ContactCard = () => {
  return (
    <div className="lg:h-[45rem] py-4 w-full  rounded-lg   my-4  relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 z-20">
        <h1 className="relative z-10 text-3xl md:text-7xl  text-center font-sans font-bold">
          Contact Us
        </h1>

        <p className="text-neutral-500 max-w-lg mx-auto my-4  text-sm text-center relative z-10">
          Welcome to my portfolio. If you have any questions or would like to
          work together, please feel free to contact me.
        </p>
        <div className="w-full flex justify-evenly my-10">
          <div className="tooltip " data-tip="Shivaydv1256@gmail.com">
            <Link href={"mailto:shivaydv1256@gmail.com"} className="btn w-40">
              <BiMailSend size={24} />
              Send Mail
            </Link>
          </div>
          <div className="tooltip " data-tip="+91 7268854798">
            <Link href={"tel:+91 7268854798"} className="btn w-40">
              <MdCall size={24} />
              Call Me
            </Link>
          </div>
        </div>
        <Social className="w-full justify-evenly   border-t pt-6" />
      </div>
      <BackgroundBeams className="" strokes="light" />
    </div>
  );
};

export default ContactCard;
