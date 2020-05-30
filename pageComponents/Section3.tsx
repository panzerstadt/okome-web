import Section from "../components/Section";
import { ItemCard } from "../components/ItemCard";

const Content = {
  one: {
    img: "/images/process/dummy1.png",
    text: "お得な割引",
  },
  two: {
    img: "/images/process/dummy2.png",
    text: "手続きは初回のみ",
  },
  three: {
    img: "/images/process/dummy3.png",
    text: "スキップ可能",
  },
};

export const Three = () => {
  return (
    <Section>
      <h1>らくらく定期便</h1>
      <h3>面倒な買い出しにおさらば</h3>

      <div className="flex items-center justify-center">
        <ItemCard content={Content.one} />
        <ItemCard content={Content.two} />
        <ItemCard content={Content.three} />
      </div>
    </Section>
  );
};
