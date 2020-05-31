import React, { useState, useEffect, useRef } from "react";
import CarouselSection from "../components/CarouselSection";
import ImageCard from "../components/Image";
import Section from "../components/Section";
import { useScroll } from "../components/hooks/useScroll";

const TextTop = () => {
  return (
    <div className="flex items-center justify-center h-screen font-serif text-white text-7xl scrollsnap-child">
      お米からこだわる食卓
    </div>
  );
};

const TextBottom = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen scrollsnap-child">
      <h1 className="px-6 py-1 font-serif text-white text-7xl bg-darkBlue">
        おいしい・あんしん・らくらく
      </h1>
      <h3 className="max-w-6xl px-4 py-2 mt-6 font-serif text-6xl text-white bg-darkBlue">
        宅米便では最先端のIT技術で品質を管理した
        こだわりのお米を毎月お家にお届けします。
      </h3>
    </div>
  );
};

export const One = () => {
  const sectionRef = useRef();
  const [hasScrolled, setHasScrolled] = useState(false);
  const { isScrolling } = useScroll(sectionRef);

  useEffect(() => {
    setHasScrolled(false);
  }, []);

  useEffect(() => {
    !hasScrolled && setHasScrolled(true);
  }, [isScrolling]);

  return (
    <Section>
      <div
        ref={sectionRef}
        className="relative max-h-screen border border-red-500 remove-scrollbar scrollsnap-parent"
      >
        <div className="absolute z-10 w-screen h-screen overflow-y-scroll scrollsnap-parent">
          <TextTop />
          <TextBottom />
        </div>
        <div className="h-screen">
          <CarouselSection>
            <ImageCard src="/images/carousel/ricehand.jpg" />
            <ImageCard src="/images/carousel/ricestalk.jpg" />
            <ImageCard src="/images/carousel/ricebowl.jpg" />
            <ImageCard src="/images/carousel/ricefield2.jpg" />
            <ImageCard src="/images/carousel/riceterrace.jpg" />
            <ImageCard src="/images/carousel/ricefield.jpg" />
          </CarouselSection>
        </div>
      </div>
    </Section>
  );
};
