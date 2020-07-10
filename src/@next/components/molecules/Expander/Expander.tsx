import React from "react";
import { IProps } from "./types";
import arrowDown from "images/arrow-down-black.svg";
import arrowUp from "images/arrow-up-black.svg";
import "./style.scss";

export const Expander: React.FC<IProps> = ({
  title,
  content,
  expanded,
  id,
  handleToggle,
}) => {
  return (
    <div className="expanded">
      <div className="title" onClick={() => handleToggle(id, expanded)}>
        <p>{title}</p>
        <img src={expanded ? arrowUp : arrowDown} />
      </div>
      {expanded && (
        <div
          className="content"
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      )}
    </div>
  );
};
