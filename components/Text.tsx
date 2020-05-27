import React from "react";

type Sizes = "XL" | "L" | "M" | "S" | "XS";
type Letterform = "font-serif" | "font-sans";

interface Text {
  letterform?: Letterform;
  size?: Sizes;
}

const Text: React.FC<Text> = ({ children, letterform = "font-sans" }) => {
  return (
    <h1 className={`text-lg font-bold text-gray-800 ${letterform}`}>
      {children}
    </h1>
  );
};

export default Text;
