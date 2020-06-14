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
  OptionList,
  Thumbnail,
  ButtonGroup,
  SettingToggle,
} from "@shopify/polaris";
import { Address } from "../components/forms/Address";
import { Cart } from "../components/forms/Cart";
import { sumCheckoutItems } from "../components/forms/Cart/utils";

const Checkout = ({ client }) => {
  const [checkoutId, setCheckoutId] = useState("");
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [currency, setCurrency] = useState("");
  const handleCheckoutItems = (lineItems) => {
    const total = sumCheckoutItems(lineItems);
    setTotalAmount(total);
  };

  // confirmation and submit
  const [checkboxes, setCheckboxes] = useState([]);
  const handleCheckboxesChange = useCallback(
    (value) => setCheckboxes(value),
    []
  );

  const breadcrumbs = [{ content: "top page", url: "/" }];

  const choiceListItems = [
    { label: "I accept the Terms of Service", value: "false" },
    { label: "I consent to receiving emails", value: "false2" },
  ];

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
        <Cart
          client={client}
          onResult={handleCheckoutItems}
          onCurrency={setCurrency}
          onCheckoutId={setCheckoutId}
        />
        <Address client={client} checkoutId={checkoutId} />

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
            <FormLayout>
              <ChoiceList
                title={`By clicking on the "Confirm" button, you agree to be charged a
              monthly amount of ${totalAmount} ${currency}`}
                allowMultiple
                choices={choiceListItems}
                selected={checkboxes}
                onChange={handleCheckboxesChange}
              />

              <Button primary onClick={() => handleConfirmSubscription()}>
                Confirm
              </Button>
            </FormLayout>
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

export default Checkout;
