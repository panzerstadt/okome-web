import React from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "./hooks/useIntersectionObserver";

export const MenuItems = ({ content, onClick }) => {
  const [ref, entry] = useIntersectionObserver({});

  const variants = {
    animate: { x: 0, opacity: 1 },
  };

  return (
    <div
      key={content.key}
      className="flex flex-col items-center justify-center m-4 "
    >
      <img src={content.img} className="m-4" />
      <p className="p-8 text-5xl">
        {content.text} {content.price}円
      </p>
      <button onClick={() => onClick(content.productId)}>
        <motion.div
          ref={ref}
          initial={{ x: -50, opacity: 0 }}
          animate={entry.intersectionRatio > 0 ? "animate" : null}
          transition={{ ease: "linear", duration: 0.4, delay: 0.2 }}
          variants={variants}
        >
          注文する
        </motion.div>
      </button>
    </div>
  );
};
