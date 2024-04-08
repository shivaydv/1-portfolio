
import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import {  Menu, X } from "lucide-react";
import Logo from "./Logo";
import Sidebar from "./Sidebar";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="drawer sticky top-0 z-30 ">
      <input id="menu" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <nav 
        
        className="navbar bg-base-100 lg:h-24 shadow-sm">
          <div className="navbar-start">
            <Logo className="pl-2" />
          </div>

          <div className="navbar-center hidden lg:flex ">
            <ul className="menu menu-horizontal px-1 gap-2">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/about"}>About</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>

          {/* navbar right  */}
          <div className="navbar-end ">
            <div className="max-lg:hidden">
              <ThemeSwitcher />
            </div>
            <label
              htmlFor="menu"
              className="drawer-button btn btn-ghost px-3 lg:hidden "
            >
              <Menu />
            </label>
          </div>
        </nav>
      </div>

      <Sidebar />
    </div>
  );
};

export default Navbar;
