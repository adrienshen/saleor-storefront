import classNames from "classnames";
import * as React from "react";
import { Link } from "react-router-dom";
import ReactSVG from "react-svg";

import { TaxedMoney } from "@components/containers";
import { OrderByToken_orderByToken_lines_unitPrice } from "@sdk/queries/types/OrderByToken";

import { generateProductUrl } from "../../core/utils";
import { CartLine } from "../CartProvider/context";

import { ProductVariant } from "../../checkout/types/ProductVariant";
import cartAddDisabledImg from "../../images/cart-add-disabled.svg";
import cartAddImg from "../../images/cart-add.svg";
import cartSubtractImg from "../../images/cart-subtract.svg";

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
  add,
  changeQuantity,
  mediumScreen,
  processing,
  remove,
  subtract,
  line,
}) => {
  const productUrl = generateProductUrl(line.product.id, line.product.name);
  const editable = !!(add && subtract && remove && changeQuantity);
  const inStock =
    line.stockQuantity === undefined
      ? false
      : line.quantity < line.stockQuantity;
  const quantityChangeControls = (
    <div className="cart-table__quantity-cell__controls">
      <ReactSVG path={cartSubtractImg} onClick={() => subtract(line.id)} />
      <p>{line.quantity}</p>
      <ReactSVG
        className={classNames({ disabled: !inStock })}
        path={inStock ? cartAddImg : cartAddDisabledImg}
        onClick={inStock ? () => add(line.id) : undefined}
      />
    </div>
  );

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
          {editable ? quantityChangeControls : <p>{line.quantity}</p>}
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
