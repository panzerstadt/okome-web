import React from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "./hooks/useIntersectionObserver";

const SectionHeader = ({ title }) => {
  const [ref, entry] = useIntersectionObserver({});

  const variants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };

  return (
    <div>
      <motion.h1
        ref={ref}
        className="p-12 leading-normal text-center sm:p-16"
        variants={variants}
        initial={"hidden"}
        animate={entry.intersectionRatio > 0 ? "visible" : "hidden"}
        transition={{
          duration: 0.6,
          ease: [0.175, 0.885, 0.32, 1.275],
        }}
      >
        {title}
      </motion.h1>
    </div>
  );
};

export default SectionHeader;
