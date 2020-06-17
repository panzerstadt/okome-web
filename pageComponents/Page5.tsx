import React from "react";
import { TripleTile } from "../components/TripleTile";

const processes = [
  { image: "/images/process/dummy1.png", description: "お得な割引" },
  { image: "/images/process/dummy2.png", description: "手続きは初回のみ" },
  { image: "/images/process/dummy3.png", description: "スキップも可能" },
];

export const Page5 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-300">
      <h1 className="p-16 text-6xl">定期便は良いことづくし</h1>
      <div className="flex flex-row items-center justify-around ">
        {processes.map((x) => (
          <TripleTile image={x.image} description={x.description} />
        ))}
      </div>
    </div>
  );
};
