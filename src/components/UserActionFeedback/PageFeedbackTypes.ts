import { IPageFeedbackTypes, pageType } from "./types";
import cartIcon from "images/cart-empty.svg";
import messageSentIcon from "images/message-sent.svg";

export const PageFeedbackTypes: IPageFeedbackTypes = {
  [pageType.MESSAGE_SENT]: {
    icon: messageSentIcon,
    message: "Message sent !",
    detail: "We will contact you in a timely manner",
    buttonText: "Continue Shopping",
  },
  [pageType.CART_EMPTY]: {
    icon: cartIcon,
    message: "Your cart is empty",
    detail: "You haven’t added anything yet.",
    buttonText: "Continue Shopping",
  },
};
