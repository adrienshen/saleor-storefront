import React from "react";
import ReactSVG from "react-svg";
import gridIcon from "../../images/baseline-dashboard.svg";

export const GridCollection = ({ handleViewChange }) => {
  return (
    <div
      className="collection-wrapper__main collection-wrapper__grid"
      onClick={() => handleViewChange("grid")}
    >
      <ReactSVG path={gridIcon} className="collection-wrapper__main-icon" />
      <span className="collection-wrapper__main-name">Grid</span>
    </div>
  );
};
