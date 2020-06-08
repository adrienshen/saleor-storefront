import * as React from "react";
import { IPage, IPosition } from "./types";
import PageHeader from "../../../components/Header/PageHeader";

export const Page = ({ data, history }: IPage) => {
  const handleClick = () => {
    history.goBack();
  };

  const topColorItems =
    data?.filter(item => item.position === IPosition.Top) || [];
  const bottomColorItems =
    data?.filter(item => item.position === IPosition.Bottom) || [];

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
            <img src={item.image.url} alt={item.image.alt} key={idx} />
          ))
        ) : (
          <div>No top colors available</div>
        )}
        <div>BOTTOM COLORS</div>
        {bottomColorItems?.length > 1 ? (
          bottomColorItems.map((item, idx) => (
            <img src={item.image.url} alt={item.image.alt} key={idx} />
          ))
        ) : (
          <div>No bottom colors available</div>
        )}
      </div>
    </div>
  );
};

export default Page;
