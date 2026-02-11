import { navLinks } from "@/utils/data";
import { X } from "lucide-react";
import Link from "next/link";
import React from "react";

function Menu({
  isOpen,
  setIsOpen,
}: {
  readonly isOpen: boolean;
  readonly setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <nav
      className={`${isOpen ? "visible" : "invisible"} z-60 p-5 fixed w-full h-screen inset-0 bg-foreground text-background`}
    >
      <div className="flex justify-end">
        <button onClick={() => setIsOpen(false)}>
          <X className="w-8 h-8" strokeWidth={1} />
        </button>
      </div>
      <div className="flex justify-center h-full">
        <ul className="flex flex-col justify-center items-center gap-3">
          {navLinks.map((item) => {
            return (
              <li
                key={item.title}
                className={`text-[6vw] leading-none capitalize font-viagram hover:font-swily`}
              >
                <Link href={item.href}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
