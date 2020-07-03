import React from "react";
import ReactSVG from "react-svg";
import gridIcon from "../../images/baseline-dashboard.svg";
import { GridViewTypes } from "../../constants";

interface IProps {
  handleViewChange: (type: GridViewTypes) => void;
}

export const GridCollection = ({ handleViewChange }: IProps) => {
  return (
    <div
      className="collection-wrapper__main collection-wrapper__grid"
      onClick={() => handleViewChange(GridViewTypes.Grid)}
    >
      <ReactSVG path={gridIcon} className="collection-wrapper__main-icon" />
      <span className="collection-wrapper__main-name">Grid</span>
    </div>
  );
};
