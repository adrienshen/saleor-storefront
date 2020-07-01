import React, { useState } from "react";
import { IProps, IColor, LocalStorageKeys, IPosition } from "./types";
import { ColorItem } from "./ColorItem";
import "./index.scss";

const getDataFromStorage = () =>
  JSON.parse(localStorage.getItem(LocalStorageKeys.CabinetColor)) || {};

export const ColorSelection: React.FC<IProps> = ({
  colors,
  position,
  collectionId,
}) => {
  const [selectedColor, setSelectedColor] = useState(getDataFromStorage());

  const onChangeColor = (type: IPosition, colorID: number) => {
    const color = {
      ...selectedColor,
      [type]: colorID,
      collectionId: collectionId,
    };
    localStorage.setItem(LocalStorageKeys.CabinetColor, JSON.stringify(color));
    setSelectedColor(color);
  };

  return (
    <div>
      <p className="color-type">{position.toLocaleUpperCase()} COLOR</p>
      <div className="colors">
        {colors.map((item: IColor, idx) => (
          <ColorItem
            selected={
              selectedColor[item.position] === item.id &&
              selectedColor?.collectionId === collectionId
            }
            image={item}
            onChangeColor={onChangeColor}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
};
