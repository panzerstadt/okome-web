import React from "react";

const Section = ({ children }) => {
  return (
    <div className="h-screen leading-normal tracking-normal border-2 border-red-400">
      {children}
    </div>
  );
};

export default Section;
