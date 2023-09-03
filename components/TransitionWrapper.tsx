"use client";

import { motion } from "framer-motion";

const TransitionWrapper = ({ children, delay, className }: { children: React.ReactNode, delay: number, className: string | null }) => {
  return (
    <motion.div
      className={className || ""}
      transition={{ delay: delay, duration: 1 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default TransitionWrapper;
