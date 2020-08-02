import React, { useState, useEffect } from "react";
import { MenuItems } from "../components/MenuItems";
import { useInitCheckout } from "../components/hooks/useShopifyInitCheckout";
import { CheckoutButton } from "../components/CheckoutBtn";
import PopOut from "../components/PopOut";
import { useProductCatalog } from "../components/Square/useProductCatalog";

export const Page4 = ({ client }) => {
  const [products, updateProducts] = useProductCatalog();

  // const { checkoutId, userAlreadyHasItems } = useInitCheckout(client);

  // once the user selects an item, open a checkout page
  const [userHasSelectedItem, setUserHasSelectedItem] = useState(false);
  const handleSelect = (id: string) => {
    // add checkout item to cart
    const lineItems = [{ variantId: id, quantity: 1 }];

    // client.checkout.addLineItems(checkoutId, lineItems).then((checkout) => {
    //   setUserHasSelectedItem(true);
    // });
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-cyan">
      <PopOut>
        <h1 className="p-12 leading-normal text-center sm:p-16">Menu</h1>
      </PopOut>
      <div className="flex flex-col items-center justify-center grid-cols-3 gap-4 p-4 my-8 sm:grid">
        {products.map((prod, i) => {
          const imgSrc = prod.image;
          const text = prod.name;

          const content = {
            key: i,
            img: imgSrc,
            text: text,
            productId: prod.id,
            price: prod.price,
          };

          return <MenuItems key={i} content={content} onClick={handleSelect} />;
        })}
        {/* {(userHasSelectedItem || userAlreadyHasItems) && <CheckoutButton />} */}
      </div>
    </div>
  );
};
