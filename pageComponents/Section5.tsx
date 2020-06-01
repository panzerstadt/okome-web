import React, { useState, useEffect } from "react";
import Section from "../components/Section";
import Link from "next/link";
import { Button } from "@shopify/polaris";

export const Five = () => {
  return (
    <Section>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h1>定期宅配を注文する</h1>
        <div>
          <Link href="/checkout">
            <Button primary>Join the subscription</Button>
          </Link>
        </div>
      </div>
    </Section>
  );
};
