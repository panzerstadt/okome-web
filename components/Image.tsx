import React from "react";

const ImageCard = ({ src, alt = "image" }) => {
  return (
    <div className="border border-gray-100">
      <img src={src} alt={alt} />
    </div>
  );
};

export default ImageCard;
