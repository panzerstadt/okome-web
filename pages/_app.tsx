import "react-multi-carousel/lib/styles.css";
import "@shopify/polaris/styles.css";
import "../styles/index.css";
import { AppProvider } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";
import { Client } from "../components/Square/SquareAPI";

const APP_ID = "sandbox-sq0idb-CxiAbISCJ5tIa1QM97uzKw";
const ACCESS_TOKEN =
  "EAAAEKWMsagfxuR6l6ImNcBq0e0xtaGOTOcbrmYvY0520DvzEk3YuJ2js0Zov7a4";

const client = new Client({ access_token: ACCESS_TOKEN });

const AppRoot = ({ Component, pageProps }) => {
  return (
    <AppProvider i18n={enTranslations}>
      <Component {...pageProps} client={client} />
    </AppProvider>
  );
};

export default AppRoot;
