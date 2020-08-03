import React, { useState, useEffect } from "react";
import {
  Layout,
  Card,
  DisplayText,
  Button,
  FormLayout,
} from "@shopify/polaris";
import { useInitCheckout } from "../../hooks/useShopifyInitCheckout";
import { sumCheckoutItems } from "./utils";

interface Cart {
  client: any;
  onResult?: (items: any[]) => void;
  onTotal?: (number) => void;
  onCurrency?: (string) => void;
  onCheckoutId?: (string) => void;
  onCheckoutURL?: (string) => void;
}

export const Cart: React.FC<Cart> = ({
  client,
  onResult,
  onTotal,
  onCurrency,
  onCheckoutId,
  onCheckoutURL,
}) => {
  const handleLineItemUpdate = (lineItems) => {
    setItemsInCart(lineItems);

    const total = sumCheckoutItems(lineItems);
    const currency = lineItems[0].variant.priceV2.currencyCode;

    setTotalAmount(total);
    setCurrencyCode(currency);
    onResult && onResult(lineItems);
    onTotal && onTotal(total);
    onCurrency && onCurrency(currency);
  };

  const { checkoutId, userAlreadyHasItems } = useInitCheckout(client);
  const [itemsInCart, setItemsInCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [currencyCode, setCurrencyCode] = useState("");
  useEffect(() => {
    if (checkoutId) {
      onCheckoutId && onCheckoutId(checkoutId);
      client.checkout.fetch(checkoutId).then((checkout) => {
        onCheckoutURL(checkout.webUrl);
        handleLineItemUpdate(checkout.lineItems);
      });
    }
  }, [checkoutId]);

  const handleUpdateLineItems = (lineItems) => {
    client.checkout.updateLineItems(checkoutId, lineItems).then((checkout) => {
      handleLineItemUpdate(checkout.lineItems);
    });
  };

  const handleReduceQuantity = (id, quantity) => {
    const lineItems = [{ id, quantity: quantity - 1 }];
    handleUpdateLineItems(lineItems);
  };

  const handleAddQuantity = (id, quantity) => {
    const lineItems = [{ id, quantity: quantity + 1 }];
    handleUpdateLineItems(lineItems);
  };

  return (
    <Layout.AnnotatedSection
      title="Shopping Cart"
      description="items in your shopping cart"
    >
      <Card sectioned>
        <div className="space-y-12">
          {itemsInCart.length > 0 ? (
            itemsInCart.map((item, i) => {
              const price = item.variant.priceV2;
              return (
                <div key={i} className="flex justify-between">
                  <FormLayout>
                    <DisplayText size="medium">{item.title}</DisplayText>
                    <DisplayText size="small">
                      {price.amount + " " + currencyCode}
                    </DisplayText>

                    <div className="flex space-x-6">
                      <Button
                        onClick={() =>
                          handleReduceQuantity(item.id, item.quantity)
                        }
                      >
                        -
                      </Button>
                      <DisplayText size="small">{item.quantity}</DisplayText>
                      <Button
                        onClick={() =>
                          handleAddQuantity(item.id, item.quantity)
                        }
                      >
                        +
                      </Button>
                    </div>
                  </FormLayout>

                  <img
                    className="max-w-sm"
                    style={{ maxHeight: 150 }}
                    src={item.variant.image.src}
                    alt={item.title}
                  />
                </div>
              );
            })
          ) : (
            <DisplayText size="small">
              There are no items in your Cart.
            </DisplayText>
          )}
        </div>
        <hr className="mt-6" />
        <div className="flex justify-between mt-6">
          <DisplayText size="medium">Total</DisplayText>
          <DisplayText size="small">
            {totalAmount + " " + currencyCode} / Month
          </DisplayText>
        </div>
      </Card>
    </Layout.AnnotatedSection>
  );
};
