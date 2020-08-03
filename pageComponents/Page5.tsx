import React from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "../components/hooks/useIntersectionObserver";
import PopOut from "../components/PopOut";

const processes = [
  { image: "/images/process/sale.svg", description: "お得な割引" },
  { image: "/images/process/cart.svg", description: "手続きは初回のみ" },
  { image: "/images/process/skip.svg", description: "スキップも可能" },
];

const Process = ({ image, description }) => {
  const [ref, entry] = useIntersectionObserver({});

  const variants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center p-4 m-4">
        <motion.img
          ref={ref}
          initial={"initial"}
          animate={entry.intersectionRatio > 0 ? "animate" : null}
          variants={variants}
          transition={{ ease: "linear", duration: 0.5, delay: "0.2" } as any}
          src={image}
          className="w-64 h-64"
        />
        <motion.h3
          initial={"initial"}
          animate={entry.intersectionRatio > 0 ? "animate" : null}
          variants={variants}
          transition={{ ease: "linear", duration: 0.5, delay: "0.4" } as any}
          className="p-8 leading-tight"
        >
          {description}
        </motion.h3>
      </div>
    </div>
  );
};

export const Page5 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cyan">
      <PopOut>
        <h1 className="p-12 leading-normal text-center sm:p-16">
          定期便は良いことづくし
        </h1>
      </PopOut>
      <div className="flex flex-col items-center justify-around sm:flex-row">
        {processes.map((x, i) => (
          <Process key={i} image={x.image} description={x.description} />
        ))}
      </div>
    </div>
  );
};
