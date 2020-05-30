import "react-multi-carousel/lib/styles.css";
import "@shopify/polaris/styles.css";
import "../styles/index.css";
import { AppProvider } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";

const AppRoot = ({ Component, pageProps }) => {
  return (
    <AppProvider i18n={enTranslations}>
      <Component {...pageProps} />;
    </AppProvider>
  );
};

export default AppRoot;
