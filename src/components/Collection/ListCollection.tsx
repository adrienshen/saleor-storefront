import React from "react";
import ReactSVG from "react-svg";
import listIcon from "../../images/baseline-list.svg";
import { GridViewTypes } from "../../constants";

export const ListCollection = ({ handleViewChange }) => {
  return (
    <div
      className="collection-wrapper__main"
      onClick={() => handleViewChange(GridViewTypes.LIST)}
    >
      <ReactSVG path={listIcon} className="collection-wrapper__main-icon" />
      <span className="collection-wrapper__main-name">List</span>
    </div>
  );
};
