import React from "react";
import { TripleTile } from "../components/TripleTile";
import SectionHeader from "../components/SectionHeader";

const processes = [
  { image: "/images/process/sale.svg", description: "お得な割引" },
  { image: "/images/process/cart.svg", description: "手続きは初回のみ" },
  { image: "/images/process/skip.svg", description: "スキップも可能" },
];

export const Page5 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cyan">
      <SectionHeader title="定期便は良いことづくし" />
      <div className="flex flex-col items-center justify-around sm:flex-row">
        {processes.map((x, i) => (
          <TripleTile key={i} image={x.image} description={x.description} />
        ))}
      </div>
    </div>
  );
};
