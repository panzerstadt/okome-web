import React from "react";
import { useDimension } from "../components/hooks/useDimension";

export const Page1 = () => {
  const { height } = useDimension();
  const IPHONE_7 = 667;

  return (
    <div className="relative items-center w-full h-full overflow-hidden">
      <div className="absolute flex flex-col items-center justify-center w-full h-screen">
        <h1 className="p-12 sm:p-16">宅米便</h1>
        <h1 className="p-12 sm:p-16">TAKUMAI</h1>
      </div>
      <div style={{ marginRight: height <= IPHONE_7 ? -250 : -300 }}>
        <img
          src="/images/home/top.jpg"
          className="object-cover object-right w-full h-screen"
        />
      </div>
    </div>
  );
};
