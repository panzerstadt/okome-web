import Layout from "../components/Layout";

import { One } from "../pageComponents/Section1";
import { Two } from "../pageComponents/Section2";
import { Three } from "../pageComponents/Section3";
import { Four } from "../pageComponents/Section4";
import { Five } from "../pageComponents/Section5";
import { Six } from "../pageComponents/Section6";

import Client from "shopify-buy";

const client = Client.buildClient({
  domain: "takumai.myshopify.com/",
  storefrontAccessToken: "4800632e5ebc937a33a9ea3d6bc158a6",
});

const Top = () => {
  return (
    <Layout>
      <One />
      <Two />
      <Three />
      <Four client={client} />
      <Five client={client} />
      <Six />
    </Layout>
  );
};

export default Top;
