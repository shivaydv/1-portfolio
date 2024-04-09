"use client";
import Social from "@/components/Social";
import { BackgroundBeams } from "@/components/ui/background-beam";
import Link from "next/link";
import React from "react";
import { BiMailSend } from "react-icons/bi";
import { MdCall } from "react-icons/md";

const page = () => {
  return (
    <section className="px-4 py-2 flex justify-center items-center flex-1 ">
      <div className="lg:h-[45rem] py-4 w-full  rounded-lg bg-neutral-950  my-4  relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4 z-20">
          <h1 className="relative z-10 text-3xl md:text-7xl text-white  text-center font-sans font-bold">
            Contact Us
          </h1>

          <p className="text-neutral-500 max-w-lg mx-auto my-4  text-sm text-center relative z-10">
            Welcome to MailJet, the best transactional email service on the web.
            We provide reliable, scalable, and customizable email solutions for
            your business.
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
          {/* <div className="divide-gray-50 divider"></div> */}
          <Social className="w-full justify-evenly  text-white border-t pt-6" />
        </div>
        <BackgroundBeams />
      </div>
    </section>
  );
};

export default page;
