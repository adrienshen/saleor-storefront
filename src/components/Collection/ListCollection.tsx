import React from "react";
import ReactSVG from "react-svg";
import listIcon from "../../images/baseline-list.svg";

export const ListCollection = ({ handleViewChange }) => {
  return (
    <div
      className="collection-wrapper__main"
      onClick={() => handleViewChange("list")}
    >
      <ReactSVG path={listIcon} className="collection-wrapper__main-icon" />
      <span className="collection-wrapper__main-name">List</span>
    </div>
  );
};
