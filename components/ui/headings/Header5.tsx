import React from "react";

function Header5({
  text,
  className,
}: {
  readonly text: string;
  readonly className?: string;
}) {
  return <h5 className={`${className} text-sm uppercase`}>{text}</h5>;
}

export default Header5;
