import * as React from "react";
import { TaxedMoney } from "@components/containers";
import { Thumbnail } from "@components/molecules";
import { LineI } from "../../CartTable/ProductRow";
import ReactSVG from "react-svg";
import editIcon from "../../../images/baseline-edit-24px.svg";
import cancelIcon from "../../../images/cancel-24px.svg";

enum LocalStorageKeys {
  Cart = "cart",
}

const ProductList: React.SFC<{
  lines: LineI[];
  remove(variantId: string): void;
  add(variantId: string, quantity: number): void;
  subtract(variantId: string, quantity: number): void;
}> = ({ lines, remove, add, subtract }) => {
  const [stockQuantity, setStockQuantity] = React.useState({
    id: null,
    stock: 0,
  });
  return (
    <div>
      <div className="cart__header">
        <span>Colored Parrot Cushion</span>
        <ReactSVG path={editIcon} className="cart__edit cart__icon" />
      </div>
      <ul className="cart__list">
        {lines.map(line => {
          const cart =
            JSON.parse(localStorage.getItem(LocalStorageKeys.Cart)) || [];
          const cartItem = cart.find(item => item.variantId === line.id);
          const cartQuantity = (cartItem && cartItem.quantity) || 0;
          if (stockQuantity.id !== line.id) {
            setStockQuantity({
              id: line.id,
              stock: line.stockQuantity - cartQuantity,
            });
          }
          return (
            <li key={line.id} className="cart__list__item">
              <div className="cart__list__item__photo">
                <Thumbnail source={line.product} />
              </div>
              <div className="cart__list__item__details">
                <p>{line.product.name}</p>
                <div className="cart__list__item__details__variant">
                  <span>SKU: {`W1230-CYOHH`}</span>
                  <span>Dimension: {`10"w x 12"h x 24"d`}</span>
                  <span>Stock: {stockQuantity.stock} </span>
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
                    stockQuantity={stockQuantity}
                    setStockQuantity={setStockQuantity}
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
  function increment() {
    if (quantity + 1 > 10) {
      return;
    }
    props.add(props.id, 1);
    setQuantity(quantity + 1);
    props.setStockQuantity({
      id: props.id,
      stock: props.stockQuantity.stock - 1,
    });
  }

  function decrement() {
    if (quantity - 1 < 0) {
      return;
    }
    props.subtract(props.id, 1);
    setQuantity(quantity - 1);
    props.setStockQuantity({
      id: props.id,
      stock: props.stockQuantity.stock + 1,
    });
  }
  const isDisableInc = props.stockQuantity.stock === 0;
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
