import { useEffect, useState } from "react";

const BROWSER_KEY = "takumai-checkout-id";

const loadCheckout = async (client) => {
  const id = window.localStorage.getItem(BROWSER_KEY);
  if (!id) return null;
  const hasItems = await client.checkout.fetch(id).then((checkout) => {
    return checkout.lineItems.length > 0;
  });
  return { id, hasItems };
};

const createCheckout = async (client) => {
  return await client.checkout.create().then((checkout) => {
    window.localStorage.setItem(BROWSER_KEY, checkout.id);
    return {
      id: checkout.id,
      hasItems: false,
    };
  });
};

export const useInitCheckout = (client) => {
  const [checkoutId, setCheckoutId] = useState("");
  const [userAlreadyHasItems, setUserAlreadyHasItems] = useState(false);

  useEffect(() => {
    const run = async () => {
      let id;
      // on mount, check for existing checkout id on localstorage
      const checkoutObj = await loadCheckout(client);
      if (checkoutObj) {
        id = checkoutObj.id;
        setUserAlreadyHasItems(checkoutObj.hasItems);
      } else {
        // if none, make new checkout
        id = await createCheckout(client);
      }

      setCheckoutId(id);
    };

    run();
  }, []);

  return { checkoutId, userAlreadyHasItems };
};
