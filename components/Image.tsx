import React from "react";
import { SECTION_HEIGHT } from "../constants";

const ImageCard = ({ src, alt = "image" }) => {
  return (
    <div className="h-screen">
      <img className="object-cover w-full h-full" src={src} alt={alt} />
    </div>
  );
};

export default ImageCard;
