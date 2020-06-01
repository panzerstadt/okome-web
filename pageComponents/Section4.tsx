import React, { useState, useEffect } from "react";
import Section from "../components/Section";
import { ItemCard } from "../components/ItemCard";
import { CheckoutButton } from "../components/CheckoutBtn";
import { useInitCheckout } from "../components/hooks/useInitCheckout";

export const Four = ({ client }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    client.product.fetchAll().then((products) => {
      setProducts(products);
    });
  }, []);

  const { checkoutId, userAlreadyHasItems } = useInitCheckout(client);

  // once the user selects an item, open a checkout page
  const [userHasSelectedItem, setUserHasSelectedItem] = useState(false);
  const handleSelect = (id: string) => {
    // add checkout item to cart
    const lineItems = [{ variantId: id, quantity: 1 }];

    client.checkout.addLineItems(checkoutId, lineItems).then((checkout) => {
      setUserHasSelectedItem(true);
    });
  };

  return (
    <Section>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-6xl">MENU</h1>
        <div className="flex">
          {products.map((prod, i) => {
            const imgSrc = prod.images[0].src;
            const text = prod.title;

            const content = {
              img: imgSrc,
              text: text,
              productId: prod.variants[0].id,
            };

            return (
              <ItemCard key={i} content={content} onClick={handleSelect} />
            );
          })}
        </div>
        <br />
        <p className="font-serif">
          ※一人当たりのお米の消費量は月に約5kgと言われています
        </p>

        {(userHasSelectedItem || userAlreadyHasItems) && <CheckoutButton />}
      </div>
    </Section>
  );
};
