import Carousel from "react-multi-carousel";

const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 320 },
    items: 1,
  },
  narrowMobile: {
    breakpoint: { max: 320, min: 0 },
    items: 1,
  },
};

const CarouselSection = ({ children }) => {
  return (
    <Carousel
      arrows={false}
      autoPlaySpeed={5000}
      autoPlay
      infinite
      keyBoardControl
      draggable
      centerMode={false}
      swipeable
      responsive={responsive}
    >
      {children}
    </Carousel>
  );
};

export default CarouselSection;
