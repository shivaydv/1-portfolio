import React from "react";
import Logo from "./Logo";
import { Linkedin } from "lucide-react";
import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsMedium,
  BsTwitterX,
  BsYoutube,
} from "react-icons/bs";
import Social from "./Social";

const Footer = () => {
  return (
    <footer className=" px-10 py-4 border-t bg-base-200 text-base-content border-base-300 max-md:py-6">
      <div className="container mx-auto footer">
        <aside className="flex max-md:w-full justify-center">
          <Logo />
          <p> &#169;2024. All rights reserved.</p>
        </aside>

        <nav className="md:place-self-center md:justify-self-end max-md:w-full flex justify-center ">
          <Social />
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
