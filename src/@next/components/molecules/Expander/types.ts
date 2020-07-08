export interface IProps {
  id: number;
  title: string;
  content: string;
  expanded: boolean;
  handleToggle: (id: number, expanded: boolean) => void;
}
