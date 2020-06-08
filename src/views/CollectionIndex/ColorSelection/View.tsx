import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import Page from "./Page";
import { IPosition } from "./types";
import color1 from "./colorImages/color1.png";
import color2 from "./colorImages/color2.png";
import color3 from "./colorImages/color3.png";
import color4 from "./colorImages/color4.png";
import color5 from "./colorImages/color5.png";
import color6 from "./colorImages/color6.png";

type ViewProps = RouteComponentProps<{ id: string }>;
const data = [
  {
    name: "Dark Elegance",
    image: { url: color1, alt: "" },
    position: IPosition.Top,
  },
  {
    name: "Dark Elegance",
    image: { url: color2, alt: "" },
    position: IPosition.Top,
  },
  {
    name: "Dark Elegance",
    image: { url: color3, alt: "" },
    position: IPosition.Top,
  },
  {
    name: "Dark Elegance",
    image: { url: color4, alt: "" },
    position: IPosition.Top,
  },
  {
    name: "Dark Elegance",
    image: { url: color5, alt: "" },
    position: IPosition.Top,
  },
  {
    name: "Dark Elegance",
    image: { url: color6, alt: "" },
    position: IPosition.Top,
  },
  {
    name: "Dark Elegance",
    image: { url: color1, alt: "" },
    position: IPosition.Bottom,
  },
  {
    name: "Dark Elegance",
    image: { url: color2, alt: "" },
    position: IPosition.Bottom,
  },
  {
    name: "Dark Elegance",
    image: { url: color3, alt: "" },
    position: IPosition.Bottom,
  },
];

const View: React.FC<ViewProps> = ({ match, history }) => {
  return (
    <div className="home-page">
      <Page data={data} history={history} />
    </div>
  );
};

export default View;
