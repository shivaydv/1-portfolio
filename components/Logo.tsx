import Link from "next/link";
import React from "react";

type LogoProps = {
  className?: string;
};
const Logo = ({ className }: LogoProps) => {
  return (
    <div className={`flex justify-center items-center cursor-pointer ${className} `}>
      <span className="border border-b border-t-0 w-3 border-base-content "></span>
      <Link href={"/"} className="px-2  text-sm font-semibold tracking-widest ">SHIVA</Link>
    </div>
  );
};

export default Logo;
