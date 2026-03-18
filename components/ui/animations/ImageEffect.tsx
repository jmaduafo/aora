"use client";

import React from "react";
import { easeInOut, motion } from "framer-motion";

// SCALES THE IMAGE ON VIEW
function ImageEffect({ children }: { readonly children: React.ReactNode }) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1, transition: { delay: 0.5, duration: 0.5, ease: easeInOut } }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default ImageEffect;
