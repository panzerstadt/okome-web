import React from "react";

export const Page2 = () => {
  return (
    <div className="h-screen bg-cyan">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="pb-10">宅米便とは…</h1>
        <div className="flex flex-row items-center">
          <img src="/images/home/okomekun.png" className="h-128" />
        </div>
        <h3 className="px-10 py-10">
          宅米便は 「お米くん」 が営むお米の宅配サービスです。
        </h3>
        <h3 className="p-6">美味しいお米を毎月お家にお届けします。</h3>
      </div>
    </div>
  );
};
