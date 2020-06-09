import * as React from "react";
import classNames from "classnames";
import { IPage, IPosition } from "./types";
import PageHeader from "../../../components/Header/PageHeader";

export const Page = ({ data, history }: IPage) => {
  const [topColor, setTopColor] = React.useState({});
  const [bottomColor, setBottomColor] = React.useState({});

  const handleClick = () => {
    history.goBack();
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
        <div>TOP COLORS</div>
        <div className="colors">
          <ColorItem
            selectedColor={topColor}
            colorsList={
              data?.filter(item => item.position === IPosition.Top) || []
            }
            setSelectedColor={setTopColor}
          />
        </div>
        <div>BOTTOM COLORS</div>
        <div className="colors">
          <ColorItem
            selectedColor={bottomColor}
            colorsList={
              data?.filter(item => item.position === IPosition.Bottom) || []
            }
            setSelectedColor={setBottomColor}
          />
        </div>
      </div>
    </div>
  );
};

const ColorItem: React.SFC<any> = props => {
  const colors = props.colorsList;
  const selectedColor = props.selectedColor;
  return colors?.map((item, idx) => (
    <div
      className={classNames("color-item", {
        selected: selectedColor && item === selectedColor,
      })}
    >
      <img
        src={item.image?.url}
        alt={item.image?.alt}
        key={idx}
        onClick={() => props.setSelectedColor(item)}
      />
    </div>
  ));
};

export default Page;
