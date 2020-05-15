import React, { useEffect, useState } from "react";
import { PageHeader } from "../../../components/Header/PageHeader";
import { CartInterface } from "@temp/components/CartProvider/context";

interface IPage {
  data: any;
  cart: CartInterface;
  collectionId: string;
  history: any;
}

export const Page = ({ data, cart, collectionId, history }: IPage) => {
  const [samples, selectedSample] = useState([]);
  const collect = [];

  const handleBack = () => {
    history.goBack();
  };

  const selectImage = e => {
    if (samples.indexOf(e.target.id) > -1) {
      const image = samples.filter(img => img !== e.target.id);
      selectedSample(image);
    } else {
      selectedSample([...samples, e.target.id]);
    }
  };

  useEffect(() => {
    collect[collectionId] = [...samples];
  }, [samples]);

  const handleOrderSamples = () => {
    samples.forEach((s: string) => {
      cart.add(s, 1);
    });

    selectedSample([]);
  };

  return (
    <div className="inner-page-wrapper">
      <PageHeader
        back={true}
        cart={true}
        search={true}
        cartLines={cart.lines}
        handleClick={handleBack}
      />
      <div>
        <div className="wrapper-header">Samples</div>
        <div className="wrapper-img">
          {data.products.edges.map(
            ({ node: { name, id, pricing, thumbnail } }, idx) => (
              <div className="wrapper-img-main" key={idx}>
                <div
                  className={
                    samples
                      ? samples.indexOf(id) > -1
                        ? "wrapper-img-main-inner withBorder"
                        : "wrapper-img-main-inner noBorder"
                      : ""
                  }
                >
                  <div className="wrapper-img-main-inner--header">
                    <span>{name}</span>
                  </div>
                  <div className="wrapper-img-main-inner--img">
                    <img
                      src={thumbnail.url}
                      onClick={selectImage}
                      id={id}
                      key={idx}
                    />
                  </div>
                  <div className="wrapper-img-main-inner--price">
                    <span className="old-price">
                      <del>${pricing.priceRange.start.gross.amount}</del>
                    </span>
                    <span className="new-price">
                      ${pricing.priceRange.start.net.amount}
                    </span>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        <button
          type="button"
          className="home-page__btn"
          onClick={handleOrderSamples}
        >
          Order Samples
        </button>
      </div>
    </div>
  );
};

export default Page;
