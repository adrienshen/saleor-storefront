export enum pageType {
  MESSAGE_SENT = "MESSAGE_SENT",
  CART_EMPTY = "CART_EMPTY",
}

export interface IProps {
  page: pageType;
  history: any;
}

export interface IPageFeedbackTypes {
  [pageType: string]: {
    icon: string;
    message: string;
    detail: string;
    buttonText: string;
  };
}
