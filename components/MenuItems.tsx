import React from "react";

export const MenuItems = ({ item, image, mass, price }) => {
  return (
    <div key={item} className="flex flex-col items-center justify-center m-4">
      <img src={image} className="m-4" />
      <p className="p-8 text-4xl">
        {mass}kg {price}円
      </p>
      <button>注文する</button>
    </div>
  );
};
