import React, { useState } from "react";
import Section from "../components/Section";
import { Card, Layout, FooterHelp, Link } from "@shopify/polaris";

export const Six = () => {
  const [inquiries, setInquiries] = useState({});

  function submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setInquiries({ inquiries: "SUCCESS" });
      } else {
        setInquiries({ inquiries: "ERROR" });
      }
    };
    xhr.send(data);
  }

  return (
    <Section>
      <h1>お問い合わせ</h1>
      <p>newsletter subscription form here</p>
      <Layout>
        <Layout.AnnotatedSection
          title="Let us know your inquiries here"
          description="Our support team will be with you shortly."
        >
          <Card sectioned>
            <form
              onSubmit={submitForm}
              action="https://formspree.io/xrgypnwo"
              method="POST"
            >
              <label>Email:</label>
              <input type="email" name="email" />
              <label>Message:</label>
              <input type="text" name="message" />
              {inquiries === "SUCCESS" ? (
                <p>Thanks!</p>
              ) : (
                <button>Submit</button>
              )}
              {inquiries === "ERROR" && <p>Ooops! There was an error.</p>}
            </form>
          </Card>
        </Layout.AnnotatedSection>

        <Layout.Section>
          <FooterHelp>
            For more details on Polaris, visit our{" "}
            <Link url="https://polaris.shopify.com">style guide</Link>.
          </FooterHelp>
        </Layout.Section>
      </Layout>
    </Section>
  );
};
