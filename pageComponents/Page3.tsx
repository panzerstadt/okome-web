import React from "react";

export const Page3 = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-cyan">
      <h1 className="p-16 sm:p-20">お米くんの正体</h1>
      <div className="grid grid-cols-3 ">
        <img src="images/home/rice.jpg" className="" />
        <img src="images/home/rice_2.jpg" className="" />
        <img src="images/home/rice_3.jpg" className="" />
      </div>
      <h3 className="w-4/5 p-16">
        江戸時代に「日本三大米」と称された讃岐こしひかり。
        瀬戸内の温暖な気候ときれいな水で育ったお米は一粒一粒が
        しっかりしており、甘みのあるお米に仕上がります。
      </h3>
    </div>
  );
};
