import React from "react";

function Header4({
  text,
  className,
}: {
  readonly text: string;
  readonly className?: string;
}) {
  return <h4 className={`${className} text-xl lg:text-2xl uppercase`}>{text}</h4>;
}

export default Header4;
