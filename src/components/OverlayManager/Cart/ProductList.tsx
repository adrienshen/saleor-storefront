import * as React from "react";
import { TaxedMoney } from "@components/containers";
import { Thumbnail } from "@components/molecules";
import { LineI } from "../../CartTable/ProductRow";
import ReactSVG from "react-svg";
import editIcon from "../../../images/baseline-edit-24px.svg";
import cancelIcon from "../../../images/cancel-24px.svg";

const selectedItem = { id: null, stock: 0 };

const ProductList: React.SFC<{
  lines: LineI[];
  remove(variantId: string): void;
  add(variantId: string, quantity: number): void;
  subtract(variantId: string, quantity: number): void;
}> = ({ lines, remove, add, subtract }) => {
  return (
    <div>
      <div className="cart__header">
        <span>Colored Parrot Cushion</span>
        <ReactSVG path={editIcon} className="cart__edit cart__icon" />
      </div>
      <ul className="cart__list">
        {lines.map(line => {
          if (selectedItem.id !== line.id) {
            selectedItem.id = line.id;
            selectedItem.stock = line.stockQuantity - line.quantity;
          }
          return (
            <li key={line.id} className="cart__list__item">
              <Thumbnail source={line.product} />
              <div className="cart__list__item__details">
                <p>{line.product.name}</p>
                <div className="cart__list__item__details__variant">
                  <span>SKU: {`W1230-CYOHH`}</span>
                  <span>Dimension: {`10"w x 12"h x 24"d`}</span>
                  <span>Stock: {selectedItem.stock} </span>
                </div>
                <div className="cart__list__item__details__pricing">
                  <p>
                    <TaxedMoney taxedMoney={line.pricing.price} />
                  </p>
                  <QauntSelect
                    id={line.id}
                    quantity={line.quantity}
                    add={add}
                    subtract={subtract}
                    stock={selectedItem.stock}
                  />
                </div>
              </div>
              <ReactSVG
                path={cancelIcon}
                onClick={() => remove(line.id)}
                className="cart__remove cart__icon"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const QauntSelect: React.SFC<any> = props => {
  const [quantity, setQuantity] = React.useState(props.quantity || 0);
  const [stockQuantity, setStockQuantity] = React.useState({
    id: props.id,
    stock: props.stock,
  });
  function increment() {
    if (quantity + 1 > 10) {
      return;
    }
    props.add(props.id, 1);
    setQuantity(quantity + 1);
    selectedItem.id = props.id;
    selectedItem.stock = stockQuantity.stock - 1;
    setStockQuantity(selectedItem);
  }

  function decrement() {
    if (quantity - 1 < 0) {
      return;
    }
    props.subtract(props.id, 1);
    setQuantity(quantity - 1);
    selectedItem.id = props.id;
    selectedItem.stock = stockQuantity.stock + 1;
    setStockQuantity(selectedItem);
  }
  const isDisableInc = stockQuantity.stock === quantity;
  return (
    <div className="quantselect">
      <button onClick={decrement} className="quantselect__increment">
        -
      </button>
      <span className="quantselect__itemquantity">{quantity}</span>
      <button
        onClick={increment}
        className="quantselect__increment"
        disabled={isDisableInc}
      >
        +
      </button>
    </div>
  );
};

export default ProductList;
