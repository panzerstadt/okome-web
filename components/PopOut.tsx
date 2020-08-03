import React from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "./hooks/useIntersectionObserver";

interface PopOut {
  delay?: number;
}
const PopOut: React.FC<PopOut> = ({ children, delay }) => {
  const [ref, entry] = useIntersectionObserver({});

  const variants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };

  return (
    <div>
      <motion.div
        ref={ref}
        variants={variants}
        initial={"hidden"}
        animate={entry.intersectionRatio > 0 ? "visible" : null}
        transition={{
          delay: delay,
          duration: 0.6,
          ease: [0.175, 0.885, 0.32, 1.275],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default PopOut;
