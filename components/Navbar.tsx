import { navLinks } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav
      className="flex justify-between gap-2 items-center relative z-[10] pl-[30px] pr-[30px] pt-[18px] pb-[18px]
    max-[695px]:flex-col"
    >
      <div className="flex items-center gap-2">
        <Image
          src="/images/fav.png"
          alt="logo"
          width={32}
          height={32}
          className="rounded-full"
        />
        <h1 className="text-[30px] font-normal Main-Font mt-2">Velvet Pour</h1>
      </div>

      <div className="flex items-center gap-[48px] max-[695px]:gap-[25px] max-[376px]:gap-[7px]">
        {navLinks.map((link) => (
          <a key={link.id} href="/" className="text-[16px] font-medium">
            {link.title}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
