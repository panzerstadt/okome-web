import React from "react";

export const MenuItems = ({ content, onClick }) => {
  return (
    <div
      key={content.key}
      className="flex flex-col items-center justify-center m-4"
    >
      <img src={content.img} className="m-4" />
      <p className="p-8 text-5xl">
        {content.text} {content.price}円
      </p>
      <button onClick={() => onClick(content.productId)}>注文する</button>
    </div>
  );
};
