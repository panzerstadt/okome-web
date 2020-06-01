// https://github.com/Shopify/polaris-react

import React, { useState, useCallback, useEffect } from "react";
import {
  Layout,
  Page,
  FooterHelp,
  Card,
  Link,
  Button,
  FormLayout,
  TextField,
  AccountConnection,
  ChoiceList,
  DisplayText,
  Thumbnail,
  ButtonGroup,
  SettingToggle,
} from "@shopify/polaris";
import { ImportMinor } from "@shopify/polaris-icons";
import { useInitCheckout } from "../components/hooks/useInitCheckout";

const Checkout = ({ client }) => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [checkboxes, setCheckboxes] = useState([]);
  const [connected, setConnected] = useState(false);

  const handleFirstChange = useCallback((value) => setFirst(value), []);
  const handleLastChange = useCallback((value) => setLast(value), []);
  const handleEmailChange = useCallback((value) => setEmail(value), []);
  const handleCheckboxesChange = useCallback(
    (value) => setCheckboxes(value),
    []
  );

  const toggleConnection = useCallback(() => {
    setConnected(!connected);
  }, [connected]);

  const breadcrumbs = [{ content: "top page", url: "/" }];
  // const primaryAction = { content: "New product" };
  // const secondaryActions = [{ content: "Import", icon: ImportMinor }];

  const choiceListItems = [
    { label: "I accept the Terms of Service", value: "false" },
    { label: "I consent to receiving emails", value: "false2" },
  ];

  const accountSectionDescription = connected
    ? "Disconnect your account from your Shopify store."
    : "Connect your account to your Shopify store.";

  const accountMarkup = connected ? (
    <DisconnectAccount onAction={toggleConnection} />
  ) : (
    <ConnectAccount onAction={toggleConnection} />
  );

  const { checkoutId, userAlreadyHasItems } = useInitCheckout(client);
  const [itemsInCart, setItemsInCart] = useState([]);
  useEffect(() => {
    if (checkoutId) {
      console.log("fetching with id", checkoutId);
      client.checkout.fetch(checkoutId).then((checkout) => {
        setItemsInCart(checkout.lineItems);
      });
    }
  }, [checkoutId]);

  const handleUpdateLineItems = (lineItems) => {
    client.checkout.updateLineItems(checkoutId, lineItems).then((checkout) => {
      setItemsInCart(checkout.lineItems);
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

  const handleConfirmSubscription = () => {
    alert("yay!");
  };

  return (
    <Page
      title="Subscription"
      breadcrumbs={breadcrumbs}
      // primaryAction={primaryAction}
      // secondaryActions={secondaryActions}
    >
      <Layout>
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
                      <div>
                        <DisplayText size="large">{item.title}</DisplayText>
                        <br />

                        <DisplayText size="small">
                          {price.amount + " " + price.currencyCode}
                        </DisplayText>
                        <br />

                        <div className="flex space-x-6">
                          <Button
                            onClick={() =>
                              handleReduceQuantity(item.id, item.quantity)
                            }
                          >
                            -
                          </Button>
                          <DisplayText size="small">
                            {item.quantity}
                          </DisplayText>
                          <Button
                            onClick={() =>
                              handleAddQuantity(item.id, item.quantity)
                            }
                          >
                            +
                          </Button>
                        </div>
                      </div>

                      <div>
                        <img
                          className="max-w-sm"
                          style={{ maxHeight: 150 }}
                          src={item.variant.image.src}
                          alt={item.title}
                        />
                      </div>
                    </div>
                  );
                })
              ) : (
                <DisplayText size="small">
                  There are no items in your Cart.
                </DisplayText>
              )}
            </div>
          </Card>
        </Layout.AnnotatedSection>

        <Layout.AnnotatedSection
          title="Email Account"
          description="Order status updates will be sent to the email address specified."
        >
          {accountMarkup}
        </Layout.AnnotatedSection>

        <Layout.AnnotatedSection
          title="Shipping Details"
          description="Please enter your shipping details here."
        >
          <Card sectioned>
            <FormLayout>
              <FormLayout.Group>
                <TextField
                  value={first}
                  label="First name"
                  placeholder="Tom"
                  onChange={handleFirstChange}
                />
                <TextField
                  value={last}
                  label="Last name"
                  placeholder="Ford"
                  onChange={handleLastChange}
                />
              </FormLayout.Group>

              <TextField
                value={email}
                label="Email"
                placeholder="example@email.com"
                onChange={handleEmailChange}
              />

              <ChoiceList
                title="choices"
                allowMultiple
                choices={choiceListItems}
                selected={checkboxes}
                onChange={handleCheckboxesChange}
              />

              <Button primary>Submit</Button>
            </FormLayout>
          </Card>
        </Layout.AnnotatedSection>

        <Layout.AnnotatedSection
          title="Payment Details"
          description="please enter your payment details for month subscription."
        >
          <Card sectioned>payment detail section here</Card>
        </Layout.AnnotatedSection>

        <Layout.AnnotatedSection
          title="Confirm Subscription"
          description="please enter your payment details for month subscription."
        >
          <Card sectioned>
            <div className="flex items-end justify-between">
              <span className="max-w-md font-semibold text-black">
                By clicking on the "Confirm" button, you agree to be charged a
                monthly amount of {"<AMOUNT>"}
              </span>

              <Button primary onClick={() => handleConfirmSubscription()}>
                Confirm
              </Button>
            </div>
          </Card>
        </Layout.AnnotatedSection>

        <Layout.Section>
          <FooterHelp>
            For more details on Polaris, visit our{" "}
            <Link url="https://polaris.shopify.com">style guide</Link>.
          </FooterHelp>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

function ConnectAccount({ onAction }) {
  return (
    <AccountConnection
      action={{ content: "Connect", onAction }}
      details="No account connected"
      termsOfService={
        <p>
          By clicking Connect, you are accepting Sample’s{" "}
          <Link url="https://polaris.shopify.com">Terms and Conditions</Link>,
          including a commission rate of 15% on sales.
        </p>
      }
    />
  );
}

function DisconnectAccount({ onAction }) {
  return (
    <AccountConnection
      connected
      action={{ content: "Disconnect", onAction }}
      accountName="Tom Ford"
      title={<Link url="http://google.com">Tom Ford</Link>}
      details="Account id: d587647ae4"
    />
  );
}

export default Checkout;
