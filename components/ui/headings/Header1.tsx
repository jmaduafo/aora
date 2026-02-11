import React from "react";

function Header1({
  text,
  className,
}: {
  readonly text: string;
  readonly className?: string;
}) {
  return (
    <h1
      className={`${className} font-viagram text-[40vw] leading-none`}
    >
      {text}
    </h1>
  );
}

export default Header1;
