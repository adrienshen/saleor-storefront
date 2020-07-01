import React from "react";
import classNames from "classnames";
import { IColorItem } from "./types";

export const ColorItem: React.FC<IColorItem> = ({ selected, image }) => {
  return (
    <div className="colors">
      <div
        className={classNames("color-item", {
          selected: selected,
        })}
      >
        <img
          src={image.image?.url}
          alt={image.image?.alt}
          // onClick={() => props.setSelectedColor(item)}
        />
      </div>
    </div>
  );
};
