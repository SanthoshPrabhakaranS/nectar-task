"use client";

import Image from "next/image";
import React from "react";
import { assests } from "../assets";

const Navbar = () => {
  return (
    <header className="w-full bg-linear-to-r from-[#090979] to-blue-500 h-12 flex items-center gap-2 px-4 text-white sticky top-0 z-10">
      <Image
        className="w-8 h-8"
        src={assests.LogoImg}
        alt="logo"
        height={100}
        width={100}
      />
      <h1 className="font-semibold">Cafe Day</h1>
    </header>
  );
};

export default Navbar;
