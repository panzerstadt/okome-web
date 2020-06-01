import Layout from "../components/Layout";

import { One } from "../pageComponents/Section1";
import { Two } from "../pageComponents/Section2";
import { Three } from "../pageComponents/Section3";
import { Four } from "../pageComponents/Section4";
import { Five } from "../pageComponents/Section5";
import { Six } from "../pageComponents/Section6";

const Top = ({ client }) => {
  return (
    <Layout>
      <One />
      <Two />
      <Three />
      <Four client={client} />
      <Five />
      <Six />
    </Layout>
  );
};

export default Top;
