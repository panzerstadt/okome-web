import React from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "../components/hooks/useIntersectionObserver";
import SectionHeader from "../components/SectionHeader";
export const Page2 = () => {
  const [ref, entry] = useIntersectionObserver({});

  const variants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };
  return (
    <div className="h-screen bg-cyan">
      <div className="flex flex-col items-center justify-center h-full">
        <SectionHeader title="宅米便とは…" />
        <div className="flex flex-row items-center">
          <img src="/images/home/okomekun.png" className="h-128" />
          <motion.h3
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
            ごはんどーぞ♪
          </motion.h3>
        </div>
        <h3 className="px-10 py-10">
          宅米便は 「お米くん」 が営むお米の宅配サービスです。
        </h3>
        <h3 className="p-6">美味しいお米を毎月お家にお届けします。</h3>
      </div>
    </div>
  );
};
