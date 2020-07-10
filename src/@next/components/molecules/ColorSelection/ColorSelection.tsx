import React from "react";
import { IProps, IColor, LocalStorageKeys, IPosition } from "./types";
import { ColorItem } from "./ColorItem";
import "./index.scss";
import { useLocalStorage } from "@hooks";

export const ColorSelection: React.FC<IProps> = ({
  colors,
  position,
  collectionId,
}) => {
  const {
    storedValue: selectedColor,
    setValue: setSelectedColor,
  } = useLocalStorage(LocalStorageKeys.CabinetColor);

  const onChangeColor = (type: IPosition, colorID: number) => {
    const currentData = JSON.parse(
      localStorage.getItem(LocalStorageKeys.CabinetColor)
    );
    let color = {
      [collectionId]: { [type]: colorID },
    };
    if (currentData) {
      color = {
        ...currentData,
        [collectionId]: { ...currentData[collectionId], [type]: colorID },
      };
    }
    setSelectedColor(color);
  };

  return (
    <div>
      <p className="color-type">{position.toLocaleUpperCase()} COLOR</p>
      <div className="colors">
        {colors.map((item: IColor, idx) => (
          <ColorItem
            selected={
              selectedColor &&
              selectedColor[collectionId] &&
              selectedColor[collectionId][item.position] &&
              selectedColor[collectionId][item.position] === item.id
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
