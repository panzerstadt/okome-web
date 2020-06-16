import Layout from "../components/Layout";
import { Page1 } from "../pageComponents/Page1";
import { Page2 } from "../pageComponents/Page2";
import { Page3 } from "../pageComponents/Page3";
import { Page4 } from "../pageComponents/Page4";

// import { One } from "../pageComponents/Section1";
// import { Two } from "../pageComponents/Section2";
// import { Three } from "../pageComponents/Section3";
// import { Four } from "../pageComponents/Section4";
// import { Five } from "../pageComponents/Section5";
// import { Six } from "../pageComponents/Section6";

const Top = ({ client }) => {
  return (
    <Layout>
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      {/* 
      <One />
      <Two />
      <Three />
      <Four client={client} />
      <Five />
      <Six /> */}
    </Layout>
  );
};

export default Top;
