"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import React from "react";

const LenisProvider = ({
  children,
}: {
  readonly children: React.ReactNode;
}) => {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      }}
    >
      <div>{children}</div>
    </ReactLenis>
  );
};

export default LenisProvider;
