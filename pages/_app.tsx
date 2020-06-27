import "react-multi-carousel/lib/styles.css";
import "@shopify/polaris/styles.css";
import "../styles/index.css";
import { AppProvider } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";

import Client from "shopify-buy";

const client = Client.buildClient({
  domain: "takumai.myshopify.com/",
  storefrontAccessToken: "4800632e5ebc937a33a9ea3d6bc158a6",
});

const AppRoot = ({ Component, pageProps }) => {
  return (
    <AppProvider i18n={enTranslations}>
      <Component {...pageProps} client={client} />
    </AppProvider>
  );
};

export default AppRoot;
