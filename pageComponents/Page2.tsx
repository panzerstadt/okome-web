import React from "react";

export const Page2 = () => {
  return (
    <div className="h-screen bg-blue-300">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-6xl">Japanese Text</h1>
        <div className="flex flex-row items-center">
          <img src="/images/home/okomekun.png" className="h-128" />
        </div>
        <p className="p-6 text-4xl">
          宅米便は 「お米くん」 が営むお米の宅配サービスです。
        </p>
        <p className="p-6 text-4xl">美味しいお米を毎月お家にお届けします。</p>
      </div>
    </div>
  );
};
