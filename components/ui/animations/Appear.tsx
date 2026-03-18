"use client"

import React from "react";
import { motion } from "framer-motion";

function Appear({ children }: { readonly children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { delay: 0.5 } }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export default Appear;
