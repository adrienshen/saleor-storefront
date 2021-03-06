import * as React from "react";
import { FilterCollection } from "./FilterCollection";
import { GridCollection } from "./GridCollection";
import { ListCollection } from "./ListCollection";
import { GridViewTypes } from "@temp/constants";

interface IProps {
  handleViewChange: (type: GridViewTypes) => void;
  title: string;
}

export const SubHeader = ({ handleViewChange, title }: IProps) => {
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
