import * as React from "react";
import { TaxedMoney } from "@components/containers";
import { OrderByToken_orderByToken_lines_unitPrice } from "@sdk/queries/types/OrderByToken";
import { CartLine } from "../CartProvider/context";

import { ProductVariant } from "../../checkout/types/ProductVariant";

export type LineI = ProductVariant & {
  quantity: number;
  totalPrice: OrderByToken_orderByToken_lines_unitPrice;
  stockQuantity?: number;
};

interface ReadProductRowProps {
  mediumScreen: boolean;
  line: LineI;
}

export interface EditableProductRowProps {
  processing?: boolean;
  invalid?: boolean;
  add?(variantId: string): void;
  changeQuantity?(lines: CartLine[]): void;
  remove?(variantId: string): void;
  subtract?(variantId: string): void;
}

const ProductRow: React.FC<ReadProductRowProps & EditableProductRowProps> = ({
  line,
}) => {
  return (
    <div className="center-contents">
      <div className="row">
        <span className="">
          <label>Title: </label>
        </span>
        <span className="">
          <span>{line.product.name}</span>
        </span>
      </div>
      <div className="row">
        <span>SKU: </span>
        <span className="">
          W1234-2345
        </span>
      </div>
      <div className="row">
        <span>Quantity: </span>
        <span className="">
          {line.quantity}
        </span>
      </div>
      <div className="row">
        <span>
          <TaxedMoney taxedMoney={line.totalPrice} />
        </span>
      </div>
    </div>
  );
};

export default ProductRow;
