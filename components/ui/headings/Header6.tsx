import React from "react";

function Header6({
  text,
  className,
}: {
  readonly text: string;
  readonly className?: string;
}) {
  return <h6 className={`${className} text-sm lg:text-base uppercase leading-none`}>{text}</h6>;
}

export default Header6;
