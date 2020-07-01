export enum IPosition {
  Top = "Top",
  Bottom = "Bottom",
}

export interface IProps {
  colors: IColor[];
  position: IPosition;
}

export interface IColor {
  id: number;
  name: string;
  image: { url: string; alt: string };
  position: IPosition;
}

export interface IColorItem {
  selected: boolean;
  image: IColor;
}
