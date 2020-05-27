import Layout from "../components/Layout";
import CarouselSection from "../components/CarouselSection";
import ImageCard from "../components/Image";
import Section from "../components/Section";
import Text from "../components/Text";

const Top = () => {
  return (
    <Layout>
      <CarouselSection>
        <ImageCard src="/images/carousel/ricehand.jpg" />
        <ImageCard src="/images/carousel/ricestalk.jpg" />
        <ImageCard src="/images/carousel/ricebowl.jpg" />
        <ImageCard src="/images/carousel/ricefield2.jpg" />
        <ImageCard src="/images/carousel/riceterrace.jpg" />
        <ImageCard src="/images/carousel/ricefield.jpg" />
      </CarouselSection>

      <Section>
        <Text letterform="font-serif">
          testing testing 1 2 3 らくらく定期便{" "}
        </Text>
      </Section>
    </Layout>
  );
};

export default Top;
