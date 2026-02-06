import React from "react";
import { montrealMedium } from "@/fonts/fonts";
import Image from "next/image";
import Logo from "@/public/images/logo.png";
import Header6 from "../headings/Header6";
import BookButton from "../buttons/BookButton";
import Link from "next/link";

function Navbar() {
  return (
    <header className="sticky top-0 flex justify-between items-center py-4 px-6 bg-background">
      <button>
        <Header6 text="Menu" className={`${montrealMedium.className}`} />
      </button>
      <button className="absolute top-1/2 left-1/2 transform -translate-[50%] w-7 2xl:w-9 object-cover object-bottom ">
        <Link href="/">
          <Image src={Logo} alt="logo" className="w-full h-full" />
        </Link>
      </button>
      <div className="flex items-center gap-3">
        <button>
          <Header6 text="Cart (0)" className={`${montrealMedium.className}`} />
        </button>
        <div className="hidden sm:block">
          <BookButton text="Book Now" />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
