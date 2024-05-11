import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface cardProp {
  children: React.ReactNode;
}

const Toast = ({ children }: cardProp) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ type:"tween", duration:0.2 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Toast;
