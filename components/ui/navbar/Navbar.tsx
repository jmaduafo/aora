"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/images/logo.png";
import BookButton from "../buttons/BookButton";
import Link from "next/link";
import FlipText from "../animations/FlipText";
import Paragraph from "../headings/Paragraph";
import Menu from "./Menu";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="z-50 sticky top-0 flex justify-between items-center py-5 px-6">
      <Menu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <button onClick={() => setIsMenuOpen(true)}>
        <FlipText>
          <Paragraph text="Menu" className={`font-montrealMedium`} />
        </FlipText>
      </button>
      <button className="absolute top-1/2 left-1/2 transform -translate-[50%] w-7 2xl:w-9 object-cover object-bottom ">
        <Link href="/">
          <Image src={Logo} alt="logo" className="w-full h-full" />
        </Link>
      </button>
      <div className="flex items-center gap-3">
        <button>
          <FlipText>
            <Paragraph text="Cart (0)" className={`font-montrealMedium`} />
          </FlipText>
        </button>
        <div className="hidden sm:block">
          <BookButton text="Book Now" />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
