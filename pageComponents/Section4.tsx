import React, { useState, useEffect } from "react";
import Section from "../components/Section";
import { ItemCard } from "../components/ItemCard";

const defaultContent = [
  {
    img: "/images/prices/ricebag.jpg",
    text: "2kg - 2,000yen",
  },
  {
    img: "/images/prices/ricebag.jpg",
    text: "5kg - 4,500yen",
  },
];

export const Four = ({ client }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    client.product.fetchAll().then((products) => {
      setProducts(products);
    });
  }, []);

  return (
    <Section>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-6xl">MENU</h1>
        <div className="flex">
          {products.map((prod, i) => {
            const imgSrc = prod.images[0].src;
            const text = prod.title;

            const content = { img: imgSrc, text: text };

            return <ItemCard content={content} />;
          })}
        </div>
        <br />
        <p className="font-serif">
          ※一人当たりのお米の消費量は月に約5kgと言われています
        </p>
      </div>
    </Section>
  );
};
