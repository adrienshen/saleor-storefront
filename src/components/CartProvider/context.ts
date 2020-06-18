import { createContext } from "react";

import { updateCheckoutLine_checkoutLinesUpdate_errors } from "../../core/types/saleor";

export interface CartLineInterface {
  variantId: string;
  quantity: number;
}

export interface CartLine {
  variantId: string;
  quantity: number;
}

export interface CartInterface {
  errors: updateCheckoutLine_checkoutLinesUpdate_errors[] | null;
  lines: CartLineInterface[];
  loading: boolean;
  add(variantId: string, quantity?: number): void;
  changeQuantity(lines: CartLine[]): void;
  clear(): void;
  clearErrors(): void;
  getQuantity(): number;
  remove(variantId: string): void;
  subtract(variantId: string, quantity?: number): void;
}

/* tslint:disable:no-empty */
export const CartContext = createContext<CartInterface>({
  add: () => {},
  changeQuantity: () => {},
  clear: () => {},
  clearErrors: () => {},
  errors: null,
  getQuantity: () => 0,
  lines: [],
  loading: false,
  remove: () => {},
  subtract: () => {},
});
/* tslint:enable:no-empty */

CartContext.displayName = "CartContext";
