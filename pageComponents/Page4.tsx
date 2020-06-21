import React, { useState, useEffect } from "react";
import { MenuItems } from "../components/MenuItems";
import { useInitCheckout } from "../components/hooks/useInitCheckout";
import { CheckoutButton } from "../components/CheckoutBtn";

export const Page4 = ({ client }) => {
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
    <div className="flex flex-col items-center bg-cyan">
      <h1 className="p-16">Menu</h1>
      <div className="grid grid-cols-3 gap-4 my-8">
        {products.map((prod, i) => {
          const imgSrc = prod.images[0].src;
          const text = prod.title;
          const product = prod.variants[0];

          const content = {
            key: i,
            img: imgSrc,
            text: text,
            productId: prod.variants[0].id,
            price: product.price,
          };

          return <MenuItems content={content} onClick={handleSelect} />;
        })}
        {(userHasSelectedItem || userAlreadyHasItems) && <CheckoutButton />}
      </div>
    </div>
  );
};
