import React from "react";
import { viagram } from "@/fonts/fonts";

function Header1({
  text,
  className,
}: {
  readonly text: string;
  readonly className?: string;
}) {
  return (
    <h1
      className={`${viagram.className} ${className} text-[40vw] leading-none`}
    >
      {text}
    </h1>
  );
}

export default Header1;
