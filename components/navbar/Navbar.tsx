"use client";

import Image from "next/image";
import React, { useCallback } from "react";
import { assests } from "../assets";
import SplitBetweenElement from "../shared/SplitBetweenElement";
import { navItems } from "@/utils/constants/constants";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const handleNavigation = useCallback(
    (path: string) => {
      router.push(path);
    },
    [router]
  );

  return (
    <header className="w-full bg-linear-to-r from-[#090979] to-blue-500 h-12 flex items-center gap-2 px-4 text-white sticky top-0 z-10">
      <SplitBetweenElement>
        <div className="flex items-center gap-2">
          <Image
            className="w-8 h-8"
            src={assests.LogoImg}
            alt="logo"
            height={100}
            width={100}
          />
          <h1 className="font-semibold">Cafe Day</h1>
        </div>

        <div className="flex items-center gap-3 cursor-pointer">
          {navItems.map((item, Idx) => {
            return (
              <p
                className={`text-sm font-semibold hover:text-gray-200 transition-all duration-300`}
                onClick={() => handleNavigation(item.href)}
                key={Idx}
              >
                {item.label}
              </p>
            );
          })}
        </div>
      </SplitBetweenElement>
    </header>
  );
};

export default Navbar;
