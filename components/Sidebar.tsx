"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import { X } from "lucide-react";
import Social from "./Social";
import Link from "next/link";

const Sidebar = () => {
  const [checked, setChecked] = useState("");

  function handleClick() {
    checked == "checked" ? setChecked("") : setChecked("checked");
  }

  return (
    <div className="drawer-side lg:hidden z-20">
      {/* TASK : make the close button and close drawer when clicked on its item  */}
      <label
        htmlFor="menu"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>

      <ul className="menu p-4  w-80 min-h-full bg-base-200 grid grid-rows-[auto,_1fr,auto] text-base-content ">
        {/* Sidebar content here */}

        <div className="w-full justify-between flex border-b py-3 mb-5">
          <Logo />
          <a href="#" className="hidden">
            <X size={20} />
          </a>
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
