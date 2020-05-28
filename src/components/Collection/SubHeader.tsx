import * as React from "react";
import { FilterCollection } from "./FilterCollection";
import { GridCollection } from "./GridCollection";
import { ListCollection } from "./ListCollection";

export const SubHeader = ({ handleViewChange, title }) => {
  return (
    <div>
      <div className="browse-cabinet__heading">
        <h3>{title}</h3>
      </div>
      <div>
        <div className="collection">
          <div className="collection-wrapper">
            <FilterCollection />
          </div>
          <div className="collection-wrapper">
            <GridCollection handleViewChange={handleViewChange} />
            <ListCollection handleViewChange={handleViewChange} />
          </div>
        </div>
      </div>
    </div>
  );
};
