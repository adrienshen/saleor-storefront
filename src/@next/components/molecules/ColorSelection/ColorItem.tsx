import React from "react";
import { IColorItem } from "./types";

export const ColorItem: React.FC<IColorItem> = ({
  selected,
  image,
  onChangeColor,
}) => {
  return (
    <div className="colors">
      <div className="color-item">
        <img
          src={image.image?.url}
          alt={image.image?.alt}
          onClick={() => onChangeColor(image.position, image.id)}
          className={selected ? "selected" : ""}
        />
      </div>
    </div>
  );
};
