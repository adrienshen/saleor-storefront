import doubleDoorImg from "images/P_double_door.png";
import * as React from "react";

enum AttributeNames {
  Dimemsions = "Dimensions",
}

enum LocalStorageKeys {
  Cart = "cart",
}

function getAttributes(attributes: any) {
  return attributes.map(att => {
    return {
      attribute: att.attribute.name,
      value: att.values[0] ? att.values[0].name : null,
    };
  });
}

function findField(fields: any, name: string) {
  const founded = fields.find(f => f.attribute === name);
  return founded ? founded.value : null;
}

export const CardBlock = ({ node, add }) => {
  const [count, setCount] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const attributes = getAttributes(node.attributes);
  const firstVariantId = node.variants[0].id;
  function addItems() {
    if (!count || !node.id) {
      return;
    }
    setLoading(true);
    add(firstVariantId, count);
    setCount(0);
    setTimeout(() => setLoading(false), 1000);
  }
  const dimensions = findField(attributes, AttributeNames.Dimemsions);
  const sku = node.variants[0].sku;
  const stock = node.variants[0].stockQuantity;
  const cart = JSON.parse(localStorage.getItem(LocalStorageKeys.Cart)) || [];
  const cartItem = cart.find(item => item.variantId === firstVariantId);
  const cartQuantity = (cartItem && cartItem.quantity) || 0;
  const [stockQuantity, setStockQuantity] = React.useState({
    id: firstVariantId,
    stock: stock - cartQuantity,
  });
  const isDisableInc = stockQuantity.stock === 0;
  return (
    stockQuantity.stock &&
    stockQuantity.stock > 0 && (
      <div className="addcart-card">
        <div className="addcart-card--img">
          <div className="img-wrapper">
            <img src={doubleDoorImg} alt="Avatar" />
            <div className="small-img" />
          </div>
        </div>
        <div className="addcart-card-container">
          <div className="addcart-card-container--header">{node.name}</div>
          <div className="addcart-card-container--sub-header">
            {sku && <span>SKU: {sku}</span>}
            {dimensions && <span>Dimensions: {dimensions}</span>}
            <span>Stock: {stockQuantity.stock}</span>
          </div>

          <div className="addcart-card-container--detail">
            <span className="detail-price">
              <strong>
                ${node.pricing.priceRange.start.gross.amount.toFixed(2)}
              </strong>
            </span>
            <div className="detail-counter">
              <button
                onClick={() => {
                  if (count < 1) {
                    return;
                  }
                  setStockQuantity({
                    id: firstVariantId,
                    stock: stockQuantity.stock + 1,
                  });
                  setCount(count - 1);
                }}
                className="qty-operator"
              >
                -
              </button>
              <span className="qty-text">{count}</span>
              <button
                onClick={() => {
                  if (count > 9) {
                    return;
                  }
                  setStockQuantity({
                    id: firstVariantId,
                    stock: stockQuantity.stock - 1,
                  });
                  setCount(count + 1);
                }}
                className="qty-operator"
                disabled={isDisableInc}
              >
                +
              </button>
            </div>
          </div>

          <div className="addcart-card-container--btn">
            <button onClick={addItems}>
              {" "}
              {loading ? <span>Loading...</span> : <span>Add to Cart</span>}
            </button>
          </div>
        </div>
      </div>
    )
  );
};
