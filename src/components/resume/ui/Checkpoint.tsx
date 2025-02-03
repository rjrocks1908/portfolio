"use client";

import { motion } from "framer-motion";

function Checkpoint() {
  return (
    <motion.div
      className="absolute left-[-0.3rem] top-1.5 w-3 h-3 bg-highlight rounded-full"
      style={{
        boxShadow: "0 0 0.5rem #FFDB6E",
      }}
      whileInView={{
        scale: [1, 1.2, 1],
        transition: { duration: 0.5, delay: 0.2 },
      }}
    />
  );
}
export default Checkpoint;
