import React from "react";
import Logo from "./Logo";
import Social from "./Social";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="drawer-side lg:hidden z-20">
      <label
        htmlFor="menu"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>

      <ul className="menu p-4  w-80 min-h-full bg-base-200 grid grid-rows-[auto,_1fr,auto] text-base-content ">
        <div className="w-full justify-between flex border-b py-3 mb-5">
          <Logo />
        </div>

        <div className="space-y-2">
          <li className=" ">
            <Link href="/">Home</Link>
          </li>
          <li className="  ">
            <Link href="/about">About</Link>
          </li>
          <li className="">
            <Link href="/contact">Contact</Link>
          </li>
        </div>

        <Social className="py-5 px-2 border-t border-black" />
      </ul>
    </div>
  );
};

export default Sidebar;

{
  /* TASK : make the close button and close drawer when clicked on its item  */
}
