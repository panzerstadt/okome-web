import React from "react";
import { MenuItems } from "../components/MenuItems";

const menu = [
  {
    item: 1,
    image: "images/prices/ricebag.jpg",
    mass: 2,
    price: 2000,
  },
  {
    item: 2,
    image: "images/prices/ricebag.jpg",
    mass: 5,
    price: 4500,
  },
  {
    item: 3,
    image: "images/prices/ricebag.jpg",
    mass: 10,
    price: 9000,
  },
  {
    item: 1,
    image: "images/prices/ricebag.jpg",
    mass: 2,
    price: 2000,
  },
  {
    item: 2,
    image: "images/prices/ricebag.jpg",
    mass: 5,
    price: 4500,
  },
  {
    item: 3,
    image: "images/prices/ricebag.jpg",
    mass: 10,
    price: 9000,
  },
];

export const Page4 = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-blue-300">
      <h1 className="p-16 text-6xl">Menu</h1>
      <div className="grid grid-cols-3 gap-4 my-8">
        {menu.map((x) => (
          <MenuItems
            item={x.item}
            image={x.image}
            mass={x.mass}
            price={x.price}
          />
        ))}
      </div>
    </div>
  );
};
