"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function BlurEffect({ children }: { readonly children: React.ReactNode }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const filter = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(50px)"]);

  return (
    <div ref={containerRef} className="z-5">
      <motion.div
        style={{ filter }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default BlurEffect;
