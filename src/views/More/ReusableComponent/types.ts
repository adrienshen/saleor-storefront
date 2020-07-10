export interface IList {
  title: string;
  content: string;
}

export interface IProps {
  list: IList[];
  history: any;
  header: string;
}
