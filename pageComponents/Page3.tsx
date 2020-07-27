import React from "react";
import { TripleTile } from "../components/TripleTile";
import SectionHeader from "../components/SectionHeader";

const home = [
  { image: "/images/home/rice_1.jpg" },
  { image: "/images/home/rice_2.jpg" },
  { image: "/images/home/rice_3.jpg" },
];

export const Page3 = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-cyan">
      <SectionHeader title="お米くんの正体" />
      <div className="flex flex-col items-center justify-around sm:flex-row ">
        {home.map((x, i) => (
          <TripleTile key={i} image={x.image} description="" size="mid" />
        ))}
      </div>
      <h3 className="w-4/5 p-16">
        江戸時代に「日本三大米」と称された讃岐こしひかり。
        瀬戸内の温暖な気候ときれいな水で育ったお米は一粒一粒が
        しっかりしており、甘みのあるお米に仕上がります。
      </h3>
    </div>
  );
};
