import Layout from "../components/Layout";
import { Page1 } from "../pageComponents/Page1";
import { Page2 } from "../pageComponents/Page2";
import { Page3 } from "../pageComponents/Page3";
import { Page4 } from "../pageComponents/Page4";
import { Page5 } from "../pageComponents/Page5";
import { Page6 } from "../pageComponents/Page6";
import { Page7 } from "../pageComponents/Page7";

const Top = ({ client }) => {
  return (
    <Layout>
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 client={client} />
      <Page5 />
      <Page6 />
      <Page7 />
    </Layout>
  );
};

export default Top;
