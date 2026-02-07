"use client";

import React from "react";
import { motion } from "framer-motion";

function FlipText({ children }: { readonly children: React.ReactNode }) {
  // GIVES A SMOOTH HOVER ANIMATION THAT FLIPS TEXTS

  const containerVariants = {
    initial: { y: 0 },
    hover: { y: 0 }, // Parent animation
  };

  const childVariants = {
    initial: { y: "0%" },
    hover: { y: "-100%" },
  };

  return (
    <motion.div
      className="relative overflow-hidden"
      variants={containerVariants}
      initial="initial"
      whileHover="hover"
    >
      <motion.div variants={childVariants}>{children}</motion.div>
      <motion.div variants={childVariants} className="absolute left-0">
        {children}
      </motion.div>
    </motion.div>
  );
}

export default FlipText;
