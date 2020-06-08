export enum IPosition {
  Top = "Top",
  Bottom = "Bottom",
}

export interface IColorItem {
  name: string;
  image: { url: string; alt: string };
  position: IPosition;
}

export interface IPage {
  data: IColorItem[];
  history: any;
}
