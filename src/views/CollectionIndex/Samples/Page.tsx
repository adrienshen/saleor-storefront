import React, { useEffect, useState } from "react";
import { PageHeader } from "../../../components/Header/PageHeader";

export const Page = props => {
  const { data, refetch } = props;
  console.log('DATA >> ', data);

  const [images, selectedImages] = useState([]);
  const [cartCount, addItemIntoCart] = useState(0);
  const collect = [];

  const handleClick = () => {
    props.history.goBack();
  };

  const selectImage = e => {
    if (images.indexOf(e.target.id) > -1) {
      const image = images.filter(img => img !== e.target.id);
      selectedImages(image);
    } else {
      selectedImages([...images, e.target.id]);
    }
  };

  useEffect(() => {
    collect[props.collectionId] = [...images];
  }, [images]);

  const handleOrderSamples = () => {
    const count = collect[props.collectionId].length;
    addItemIntoCart(count);
    if (count === 0) {
      localStorage.removeItem("cartItems");
    } else {
      localStorage.setItem("cartItems", String(count));
    }
  };

  return (
    <div className="inner-page-wrapper">
      <PageHeader
        back={true}
        cart={true}
        search={true}
        itemsCount={cartCount}
        handleClick={handleClick}
      />
      <div>
        <div className="wrapper-header">Samples</div>
        <div className="wrapper-img">
          {data.products.edges.map(({ node: { name, id, pricing, thumbnail } }, idx) => (
            <div className="wrapper-img-main" key={idx}>
              <div
                className={
                  images
                    ? images.indexOf(id) > -1
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
                    <del>
                      ${pricing.priceRange.start.gross.amount}
                    </del>
                  </span>
                  <span className="new-price">
                    ${pricing.priceRange.start.net.amount}
                  </span>
                </div>
              </div>
            </div>
          ))}
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
