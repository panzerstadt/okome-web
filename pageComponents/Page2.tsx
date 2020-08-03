import React from "react";
import PopOut from "../components/PopOut";

export const Page2 = () => {
  return (
    <div className="h-screen p-4 m-4 bg-cyan">
      <div className="flex flex-col items-center justify-center h-full ">
        <PopOut>
          <h1 className="p-12 leading-normal text-center sm:p-16">
            宅米便とは…
          </h1>
        </PopOut>
        <PopOut delay={0.2}>
          <div className="flex flex-row items-center">
            <img src="/images/home/okomekun.png" className="h-128" />
            <h3>ごはんどーぞ♪</h3>
          </div>
        </PopOut>
        <h3 className="px-10 py-10">
          宅米便は 「お米くん」 が営むお米の宅配サービスです。
        </h3>
        <h3 className="p-6">美味しいお米を毎月お家にお届けします。</h3>
      </div>
    </div>
  );
};
