import React, { useEffect, useState } from "react";
import PageHeader from "../../../components/Header/PageHeader";
import { CartInterface } from "@temp/components/CartProvider/context";

interface IPage {
  data: any;
  cart: CartInterface;
  collectionId: string;
  history: any;
}

export const Page = ({ data, cart, collectionId, history }: IPage) => {
  const [samples, selectedSample] = useState([]);
  const [stockData, toggleStockMessage] = useState({
    id: null,
    isInStock: true,
  });
  const collect = [];
  const sampleExist = data.products.totalCount;

  const handleBack = () => {
    history.goBack();
  };

  const selectSample = (variantId: string, stock: number) => {
    if (stock === 0) {
      if (samples.indexOf(variantId) > -1) {
        const image = samples.filter(img => img !== variantId);
        selectedSample(image);
      } else {
        selectedSample([...samples, variantId]);
      }
      toggleStockMessage({ id: variantId, isInStock: true });
    } else {
      toggleStockMessage({ id: variantId, isInStock: false });
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
        handleClick={handleBack}
      />
      <div>
        <div className="wrapper-header">Samples</div>
        <div className="wrapper-img">
          {sampleExist > 0 ? (
            data.products.edges.map(
              ({ node: { name, id, pricing, thumbnail, variants } }, idx) => {
                return variants.map((item, index) => (
                  <div className="wrapper-img-main" key={index}>
                    <div
                      className={
                        samples
                          ? samples.indexOf(item.id) > -1
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
                          onClick={() =>
                            selectSample(item.id, item.stockQuantity)
                          }
                          id={id}
                          key={idx}
                        />
                      </div>
                      <div className="wrapper-img-main-inner--price">
                        {pricing.priceRange.start.gross.amount !==
                          pricing.priceRange.start.net.amount && (
                          <span className="old-price">
                            <del>${pricing.priceRange.start.gross.amount}</del>
                          </span>
                        )}
                        <span className="new-price">
                          ${pricing.priceRange.start.net.amount}
                        </span>
                        {stockData.id === item.id && !stockData.isInStock && (
                          <span className="stock-message">Out of stock</span>
                        )}
                      </div>
                    </div>
                  </div>
                ));
              }
            )
          ) : (
            <div className="wrapper-coming-soon">
              <span className="text">There are no samples...</span>
            </div>
          )}
        </div>

        {sampleExist > 0 && (
          <button
            type="button"
            className="home-page__btn"
            onClick={handleOrderSamples}
          >
            Order Samples
          </button>
        )}
      </div>
    </div>
  );
};

export default Page;
