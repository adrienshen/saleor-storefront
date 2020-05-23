import topArrow from "images/arrow-down.svg";
import bottomArrow from "images/arrow-up.svg";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../../components/Header/PageHeader";
import { SubHeader } from "../../components/Collection/SubHeader";

import "./scss/index.scss";

const Page = props => {
  const { data, history } = props;
  const [view, changeView] = useState("grid");
  const handleBack = () => {
    history.push("/");
  };
  const regex = /\s|_|(?=[A-Z])/;

  const handleViewChange = type => {
    changeView(type);
  };

  return (
    <div className="divImg sample-page">
      <PageHeader
        back={true}
        cart={true}
        search={true}
        handleClick={handleBack}
      />

      <div className="browse-cabinet__heading">
        <h3>Samples</h3>
      </div>

      <SubHeader handleViewChange={handleViewChange} />

      <div className="wrapper-img">
        {data.products.edges.map(
          (
            { node: { name, id, pricing, thumbnail, variants, collections } },
            idx
          ) => (
            <div className="wrapper-img-main" key={idx}>
              <div className="wrapper-img-main-inner noBorder">
                <div className="wrapper-img-main-inner--header">
                  <span>{name}</span>
                </div>
                <div className="wrapper-img-main-inner--img">
                  <Link
                    to={`/collections/cabinets/${
                      collections[0].id
                    }/${collections[0].name
                      .split(regex)
                      .join("-")
                      .toLowerCase()}/samples/}`}
                  >
                    <img src={thumbnail.url} id={id} key={idx} />
                  </Link>
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
    </div>
  );
};

export default Page;
