import { given } from "flooent";

export const sumCheckoutItems = (lineItems) => {
  const amounts = lineItems.map(
    (lineItem) => lineItem.variant.priceV2.amount * lineItem.quantity
  );
  const total = given(amounts as number[]).sum();
  return total;
};
