import React from "react";

export const Page1 = () => {
  return (
    <div className="relative items-center w-full">
      <div className="absolute flex flex-col items-center justify-center w-full h-screen">
        <h1 className="p-12 sm:p-16">宅米便</h1>
        <h1 className="p-12 sm:p-16">TAKUMAI</h1>
      </div>
      <img
        src="/images/home/top.jpg"
        className="object-cover w-full h-screen"
      />
    </div>
  );
};
