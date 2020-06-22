import React from "react";
import { TripleTile } from "../components/TripleTile";

const insta = [
  { image: "/images/insta/field1.png" },
  { image: "/images/insta/pink.JPG" },
  { image: "/images/insta/field2.png" },
];

export const Page6 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cyan">
      <h1 className="p-16">INSTAGRAM</h1>
      <div className="flex flex-col items-center justify-around sm:flex-row ">
        {insta.map((x, i) => (
          <TripleTile key={i} image={x.image} description="" size="mid" />
        ))}
      </div>
      <h3 className="w-4/5 p-16">
        最新のIT技術で収穫までの一部始終を配信中。
        お客様に安心・安全をお届けできるよう、
        お米くんが「今」どう育っているのかご覧いただけます。
      </h3>
    </div>
  );
};
