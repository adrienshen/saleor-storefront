import React from "react";
import { IProps } from "./types";
import arrowDown from "images/arrow-down-black.svg";
import arrowUp from "images/arrow-up-black.svg";
import "./style.scss";

export const Expander: React.FC<IProps> = ({ title, content, expanded }) => {
  return (
    <div className="expanded">
      <div className="title">
        <div>{title}</div>
        <img src={expanded ? arrowUp : arrowDown} />
      </div>
      {expanded && <div>{content}</div>}
    </div>
  );
};
