import * as React from "react";
import classNames from "classnames";
import { IColorItem, IPage, IPosition } from "./types";
import PageHeader from "../../../components/Header/PageHeader";

export const Page = ({ data, history }: IPage) => {
  const [topColor, setTopColor] = React.useState({});
  const [bottomColor, setBottomColor] = React.useState({});

  const handleClick = () => {
    history.goBack();
  };

  const handleChangeColor = (type: IPosition, selectedColor: IColorItem) => {
    if (type === IPosition.Top) {
      setTopColor({ topColor: selectedColor });
    } else {
      setBottomColor({ bottomColor: selectedColor });
    }
  };

  const topColorItems =
    data?.filter(item => item.position === IPosition.Top) || [];
  const bottomColorItems =
    data?.filter(item => item.position === IPosition.Bottom) || [];
  console.log("top-error", topColor);
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
        {topColorItems?.length > 1 ? (
          topColorItems.map((item, idx) => (
            <div
              className={classNames("color", {
                selected: topColor && item === topColor,
              })}
            >
              <img
                src={item.image.url}
                alt={item.image.alt}
                key={idx}
                onClick={() => handleChangeColor(IPosition.Top, item)}
              />
            </div>
          ))
        ) : (
          <div>No top colors available</div>
        )}
        <div>BOTTOM COLORS</div>
        {bottomColorItems?.length > 1 ? (
          bottomColorItems.map((item, idx) => (
            <div
              className={classNames("color", {
                selected: bottomColor && item === bottomColor,
              })}
            >
              <img
                src={item.image.url}
                alt={item.image.alt}
                key={idx}
                onClick={() => handleChangeColor(IPosition.Bottom, item)}
              />
            </div>
          ))
        ) : (
          <div>No bottom colors available</div>
        )}
      </div>
    </div>
  );
};

export default Page;
