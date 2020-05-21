import doubleDoor from "images/P_double_door.png";
import * as React from "react";

export const CardBlock = ({ node }) => {
  return (
    <div className="addcart-card">
      <div className="addcart-card--img">
        <div className="img-wrapper">
          <img src={doubleDoor} alt="Avatar" />
          <div className="small-img"></div>
        </div>
      </div>
      <div className="addcart-card-container">
        <div className="addcart-card-container--header">{node.name}</div>

        <div className="addcart-card-container--sub-header">
          <span>SKU: {node.variants[0].sku}</span>
          <span>Dimensions: 10"w x 12"h x 24"d</span>
        </div>

        <div className="addcart-card-container--detail">
          <span className="detail-price">
            <strong>
              ${node.pricing.priceRange.start.gross.amount.toFixed(2)}
            </strong>
          </span>
          <div className="detail-counter">
            <span
              className="qty-operator"
              onClick={() => console.log("Decrement")}
            >
              -
            </span>
            <span className="qty-text">{5}</span>
            <span
              className="qty-operator"
              onClick={() => console.log("Increment")}
            >
              +
            </span>
          </div>
        </div>

        <div className="addcart-card-container--btn">
          <button>
            {" "}
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};
