import * as React from "react";
import PageHeader from "../../../components/Header/PageHeader";
import { ColorSelection } from "@components/molecules";
import { IPosition } from "@components/molecules/ColorSelection/types";
import color1 from "./images/1.png";
import color2 from "./images/2.png";
import color3 from "./images/3.png";
import color4 from "./images/4.png";
import color5 from "./images/5.png";
import color6 from "./images/6.png";

const topColors = [
  {
    id: 1,
    name: "Dark Elegance",
    image: { url: color1, alt: "" },
    position: IPosition.Top,
  },
  {
    id: 2,
    name: "Dark Elegance",
    image: { url: color2, alt: "" },
    position: IPosition.Top,
  },
  {
    id: 3,
    name: "Dark Elegance",
    image: { url: color3, alt: "" },
    position: IPosition.Top,
  },
  {
    id: 4,
    name: "Dark Elegance",
    image: { url: color4, alt: "" },
    position: IPosition.Top,
  },
  {
    id: 5,
    name: "Dark Elegance",
    image: { url: color5, alt: "" },
    position: IPosition.Top,
  },
  {
    id: 6,
    name: "Dark Elegance",
    image: { url: color6, alt: "" },
    position: IPosition.Top,
  },
  {
    id: 7,
    name: "Dark Elegance",
    image: { url: color1, alt: "" },
    position: IPosition.Top,
  },
  {
    id: 8,
    name: "Dark Elegance",
    image: { url: color2, alt: "" },
    position: IPosition.Top,
  },
];

const bottomColor = [
  {
    id: 9,
    name: "Dark Elegance",
    image: { url: color1, alt: "" },
    position: IPosition.Bottom,
  },
  {
    id: 10,
    name: "Dark Elegance",
    image: { url: color2, alt: "" },
    position: IPosition.Bottom,
  },
  {
    id: 11,
    name: "Dark Elegance",
    image: { url: color3, alt: "" },
    position: IPosition.Bottom,
  },
];

export const Page = (props: any) => {
  const handleClick = () => {
    props.history.goBack();
  };

  return (
    <div className="inner-page-wrapper">
      <PageHeader
        back={true}
        cart={true}
        search={true}
        handleClick={handleClick}
      />
      <div>
        <div className="wrapper-header">Available Colors</div>
        <div className="wrapper-header">Available colors for this set</div>
        <div>
          <ColorSelection colors={topColors} position={IPosition.Top} />
        </div>
        <div>
          <ColorSelection colors={bottomColor} position={IPosition.Bottom} />
        </div>
      </div>
    </div>
  );
};

export default Page;
