import React from "react";
import { TripleTile } from "../components/TripleTile";

const processes = [
  { image: "/images/process/sale.svg", description: "お得な割引" },
  { image: "/images/process/cart.svg", description: "手続きは初回のみ" },
  { image: "/images/process/skip.svg", description: "スキップも可能" },
];

export const Page5 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cyan">
      <h1 className="p-16 leading-tight sm:p-24">定期便は良いことづくし</h1>
      <div className="flex flex-col items-center justify-around sm:flex-row">
        {processes.map((x, i) => (
          <TripleTile key={i} image={x.image} description={x.description} />
        ))}
      </div>
    </div>
  );
};
