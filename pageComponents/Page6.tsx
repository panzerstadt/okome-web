import React from "react";
import { TripleTile } from "../components/TripleTile";

const insta = [
  { image: "/images/insta/field1.png" },
  { image: "/images/insta/pink.JPG" },
  { image: "/images/insta/field2.png" },
];

export const Page6 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cyan">
      <h1 className="p-16">INSTAGRAM</h1>
      <div className="flex flex-row items-center justify-around ">
        {insta.map((x, i) => (
          <TripleTile key={i} image={x.image} description="" size="mid" />
        ))}
      </div>
      <p className="w-4/5 p-16 text-4xl leading-normal">
        最新のIT技術で収穫までの一部始終を配信中。
        お客様に安心・安全をお届けできるよう、
        お米くんが「今」どう育っているのかご覧いただけます。
      </p>
    </div>
  );
};
