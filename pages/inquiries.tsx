// https://github.com/Shopify/polaris-react

import React, { useState, useCallback } from "react";
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
  SettingToggle,
} from "@shopify/polaris";
import { ImportMinor } from "@shopify/polaris-icons";

export default function App() {
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [inquiryType, setInquiryType] = useState("");

  const [connected, setConnected] = useState(false);

  const handleSubjectChange = useCallback((value) => setSubject(value), []);
  const handleContentChange = useCallback((value) => setContent(value), []);
  const handleInquiryType = useCallback((value) => setInquiryType(value), []);

  const toggleConnection = useCallback(() => {
    setConnected(!connected);
  }, [connected]);

  const breadcrumbs = [{ content: "Sample apps" }, { content: "next.js" }];
  const primaryAction = { content: "New product" };
  const secondaryActions = [{ content: "Import", icon: ImportMinor }];

  const accountSectionDescription = connected
    ? "Disconnect your account from your Shopify store."
    : "Connect your account to your Shopify store.";

  const accountMarkup = connected ? (
    <DisconnectAccount onAction={toggleConnection} />
  ) : (
    <ConnectAccount onAction={toggleConnection} />
  );

  return (
    <Page
      title="Inquiries"
      // what is breadcrumbs? remove if not important
      breadcrumbs={breadcrumbs}
      primaryAction={primaryAction}
      secondaryActions={secondaryActions}
    >
      <Layout>
        <Layout.AnnotatedSection
          title="Let us know your inquiries here"
          description="Our support team will be with you shortly."
        >
          <Card sectioned>
            <FormLayout>
              <ChoiceList
                title="What are you inquiring about?"
                choices={[
                  { label: "Products", value: "products" },
                  { label: "Prices", value: "prices" },
                  { label: "Others", value: "others" },
                ]}
                selected={inquiryType}
                onChange={handleInquiryType}
              />
              <TextField
                value={subject}
                label="Email"
                placeholder="Price of grain"
                onChange={handleSubjectChange}
              />
              <TextField
                value={content}
                label="Content"
                placeholder="What would you like to inquire about?"
                onChange={handleContentChange}
              />
              <Button primary>Submit</Button>
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
}

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
