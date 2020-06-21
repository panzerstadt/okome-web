import React from "react";

export const TripleTile = ({ image, description }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 m-4">
      <img src={image} className="h-128" />
      {description ? <p className="p-8 text-4xl">{description}</p> : null}
    </div>
  );
};
