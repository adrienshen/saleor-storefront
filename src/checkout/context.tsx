import { createContext } from "react";

import { CardData } from "./types/CardData";
import { Checkout } from "./types/Checkout";

export enum CheckoutStep {
  Contact = 1,
  ShippingAddress,
  ShippingOption,
  BillingAddress,
  Payment,
  Review,
}

export interface CheckoutContextInterface {
  syncWithCart?: boolean;
  syncUserCheckout?: boolean;
  dummyStatus?: string | null;
  cardData?: CardData | null;
  checkout?: Checkout | null;
  loading?: boolean;
  shippingAsBilling?: boolean;
  /*
   * @deprecated Use useCheckoutStepState hook to determine step instead.
   */
  step?: CheckoutStep;
  update?(checkoutData: CheckoutContextInterface): void;
  clear?(): void;
}

export const defaultContext: CheckoutContextInterface = {
  cardData: null,
  checkout: null,
  clear: () => null,
  dummyStatus: null,
  loading: false,
  shippingAsBilling: false,
  step: CheckoutStep.ShippingAddress,
  syncUserCheckout: false,
  syncWithCart: false,
  update: () => null,
};

export const CheckoutContext = createContext<CheckoutContextInterface>(
  defaultContext
);

CheckoutContext.displayName = "CheckoutContext";
