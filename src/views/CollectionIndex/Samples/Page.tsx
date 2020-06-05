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
  const collect = [];
  const sampleExist = data?.products?.totalCount || 0;

  const handleBack = () => {
    history.goBack();
  };

  const selectSample = (variantId: string) => {
    if (samples?.indexOf(variantId) > -1) {
      const image = samples.filter(img => img !== variantId);
      selectedSample(image);
    } else {
      selectedSample([...samples, variantId]);
    }
  };

  useEffect(() => {
    collect[collectionId] = [...samples];
  }, [samples]);

  const handleOrderSamples = () => {
    samples.forEach((sample: string) => {
      cart.add(sample, 1);
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
            data?.products?.edges?.map(
              ({ node: { name, id, pricing, thumbnail, variants } }, idx) => (
                <div className="wrapper-img-main" key={idx}>
                  <div
                    className={
                      samples
                        ? samples.indexOf(variants[0]?.id) > -1
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
                        onClick={() => selectSample(variants[0].id)}
                        id={id}
                        key={idx}
                      />
                    </div>
                    <div className="wrapper-img-main-inner--price">
                      {pricing?.priceRange?.start &&
                        pricing.priceRange.start.gross?.amount !==
                          pricing.priceRange.start.net?.amount && (
                          <span className="old-price">
                            <del>${pricing.priceRange.start.gross?.amount}</del>
                          </span>
                        )}
                      <span className="new-price">
                        ${pricing.priceRange.start.net?.amount}
                      </span>
                    </div>
                  </div>
                </div>
              )
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
