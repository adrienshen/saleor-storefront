import * as React from "react";
import PageHeader from "../../../components/Header/PageHeader";
import { ColorSelection } from "@components/molecules";
import { IPosition } from "@components/molecules/ColorSelection/types";
import { topColors, bottomColor } from "./colorsMock";

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
        <div className="wrapper-sub-header">Available colors for this set:</div>
        <div className="top-color">
          <ColorSelection
            colors={topColors}
            position={IPosition.Top}
            collectionId={props.match.params.id}
          />
        </div>
        <div>
          <ColorSelection
            colors={bottomColor}
            position={IPosition.Bottom}
            collectionId={props.match.params.id}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
