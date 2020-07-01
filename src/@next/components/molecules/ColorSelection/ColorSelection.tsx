import React from "react";
import { IProps, IColor } from "./types";
import { ColorItem } from "./ColorItem";
import "./index.scss";

export const ColorSelection: React.FC<IProps> = ({ colors, position }) => {
  return (
    <div>
      <div>{position.toLocaleUpperCase()} COLORS</div>
      <div className="colors">
        {colors.map((item: IColor, idx) => (
          <div key={idx}>
            <ColorItem selected={true} image={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
