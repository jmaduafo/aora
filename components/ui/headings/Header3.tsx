import React from "react";

function Header3({
  text,
  className,
}: {
  readonly text: string;
  readonly className?: string;
}) {
  return <h3 className={`${className} text-2xl sm:text-3xl lg:text-[40px] uppercase`}>{text}</h3>;
}

export default Header3;
