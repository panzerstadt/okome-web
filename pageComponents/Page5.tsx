import React from "react";
import { TripleTile } from "../components/TripleTile";
import SectionHeader from "../components/SectionHeader";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "../components/hooks/useIntersectionObserver";

const processes = [
  { image: "/images/process/sale.svg", description: "お得な割引" },
  { image: "/images/process/cart.svg", description: "手続きは初回のみ" },
  { image: "/images/process/skip.svg", description: "スキップも可能" },
];

const Process = () => {
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
          transition={{ ease: "linear", duration: 0.5 }}
          src={processes[0].image}
          className="w-64 h-64"
        />
        <motion.h3
          initial={{ y: 50, opacity: 0 }}
          animate={entry.intersectionRatio > 0 ? "animate" : null}
          variants={variants}
          transition={{ ease: "linear", duration: 0.5, delay: "0.2" }}
          className="p-8 leading-tight"
        >
          {processes[0].description}
        </motion.h3>
      </div>
    </div>
  );
};

export const Page5 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cyan">
      <SectionHeader title="定期便は良いことづくし" />
      <Process />
      <div className="flex flex-col items-center justify-around sm:flex-row">
        {processes.map((x, i) => (
          <TripleTile key={i} image={x.image} description={x.description} />
        ))}
      </div>
    </div>
  );
};
