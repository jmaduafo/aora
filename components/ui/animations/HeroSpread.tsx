"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function HeroSpread({
  children,
  x,
}: {
  readonly children: React.ReactNode;
  readonly x: number;
}) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end start"],
  });

  const xScroll = useTransform(scrollYProgress, [0, 1], [0, {x}]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div ref={containerRef}>
      <motion.div style={{ x: xScroll, opacity }}>{children}</motion.div>
    </div>
  );
}

export default HeroSpread;
