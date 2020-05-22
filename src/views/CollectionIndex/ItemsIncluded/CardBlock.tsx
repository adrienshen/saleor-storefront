import doubleDoor from "images/P_double_door.png";
import * as React from "react";

enum AttributeNames {
  Dimemsions = "Dimensions",
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

export const CardBlock = ({ node }) => {
  const attributes = getAttributes(node.attributes);
  // console.log('node variants >> ', node.variants[0].id);
  const firstVariantId = node.variants[0].id;
  const dimensions = findField(attributes, AttributeNames.Dimemsions);
  const sku = node.variants[0].sku;
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
          {sku && <span>SKU: {sku}</span>}
          {dimensions && <span>Dimensions: {dimensions}</span>}
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
              onClick={() => console.log(`Decrement ${firstVariantId}`)}
            >
              -
            </span>
            <span className="qty-text">{5}</span>
            <span
              className="qty-operator"
              onClick={() => console.log(`Increment ${firstVariantId}`)}
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
