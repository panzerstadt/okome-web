import React from "react";

const SIZES = {
  small: "h-64 w-64",
  mid: "h-84 w-84",
  large: "h-128 w-128",
};

export const TripleTile = ({ image, description, size = SIZES.small }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 m-4">
      <img src={image} className={size} />
      {description ? <p className="p-8 text-4xl">{description}</p> : null}
    </div>
  );
};
