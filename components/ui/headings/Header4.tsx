import React from "react";

function Header4({
  text,
  className,
}: {
  readonly text: string;
  readonly className?: string;
}) {
  return <h4 className={`${className} text-base uppercase`}>{text}</h4>;
}

export default Header4;
