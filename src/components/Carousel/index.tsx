import {
  mediumScreen,
  smallScreen,
} from "../../globalStyles/scss/variables.scss";
import "./scss/index.scss";

import NukaCarousel, { CarouselProps } from "nuka-carousel";
import * as React from "react";
import Media from "react-media";

interface CarouselType extends CarouselProps {
  children: React.ReactNode;
}

const Carousel: React.FC<CarouselType> = ({ children, ...rest }) => {
  const settings = {
    className: "carousel",
    ...rest,
  };
  const carousel = (slides: number) => (
    <NukaCarousel slidesToShow={slides} slidesToScroll={slides} {...settings}>
      {children}
    </NukaCarousel>
  );

  return (
    <Media query={{ maxWidth: smallScreen }}>
      {(matches: boolean) =>
        matches ? (
          carousel(1)
        ) : (
          <Media query={{ maxWidth: mediumScreen }}>
            {(matches: boolean) => carousel(matches ? 2 : 4)}
          </Media>
        )
      }
    </Media>
  );
};

export default Carousel;
